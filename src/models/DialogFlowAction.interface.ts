import { DialogflowApp } from 'actions-on-google'; 

export interface DialogFlowAction {
  name: string,
  createrecordintent: string,
  handlerRecord: (app: DialogflowApp) => void,
  handler: (app: DialogflowApp) => void
}