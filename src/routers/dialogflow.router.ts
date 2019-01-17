import { Router, Request, Response } from 'express'
import { DialogflowApp } from 'actions-on-google'

import { DialogFlowAction } from './../models/DialogFlowAction.interface';
import * as ShowReportAction from './../dialogflow/ShowReportAction';
import * as ShowRecordAction from './../dialogflow/ShowRecordAction';

export const dialogflowRouter = Router();

dialogflowRouter.post('/', (request: Request, response: Response) => {
  // Define all the Actions.
	var actionName = request.body.result.action; 
	const actionMap = new Map();
  // Register the Actions in the DiaglogFlow App.
  if(actionName == 'show.report'){
	const actions: DialogFlowAction[] = [
    ShowReportAction
	];
	actions.forEach(action => actionMap.set(action.name, action.handler));
  }
  if(actionName == 'createupdate.record'){
	const actions: DialogFlowAction[] = [
    ShowRecordAction
	];
	actions.forEach(action => actionMap.set(action.name, action.handler));
  }
  const dialogflowApp = new DialogflowApp({request, response});
  dialogflowApp.handleRequest(actionMap);
});
