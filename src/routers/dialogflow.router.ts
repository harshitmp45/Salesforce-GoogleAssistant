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
	var actionName = req.body.result.action; 
  // Register the Actions in the DiaglogFlow App.
  if(actionName == 'show.report'){
	const actionMap = new Map();
	actions.forEach(action => actionMap.set(action.name, action.handler));
  }
  if(actionName == 'createupdaterecord'){
	  const actionMap = new Map();
	actions.forEach(action => actionMap.set(action.createrecordintent, action.handler));
  }
  const dialogflowApp = new DialogflowApp({request, response});
  dialogflowApp.handleRequest(actionMap);
});
