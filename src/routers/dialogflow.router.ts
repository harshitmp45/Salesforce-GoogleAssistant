import { Router, Request, Response } from 'express'
import { DialogflowApp } from 'actions-on-google'

import { DialogFlowAction } from './../models/DialogFlowAction.interface';
import * as ShowReportAction from './../dialogflow/ShowReportAction';

export const dialogflowRouter = Router();

dialogflowRouter.post('/', (request: Request, response: Response) => {
  // Define all the Actions.
  const actions: DialogFlowAction[] = [
    ShowReportAction
  ];
	const actionMap = new Map();
	var actionName = request.body.result.action; 
  // Register the Actions in the DiaglogFlow App.
  if(actionName == 'show.report'){
	actions.forEach(action => actionMap.set(action.name, action.handler));
  }
  if(actionName == 'createupdaterecord'){
	actions.forEach(action => actionMap.set(action.createrecordintent, action.handlerRecord));
  }
  const dialogflowApp = new DialogflowApp({request, response});
  dialogflowApp.handleRequest(actionMap);
});
