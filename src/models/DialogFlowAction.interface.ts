import { DialogflowApp } from 'actions-on-google'; 

export interface DialogFlowAction {
  name: string,
  createrecordintent: string,
  handler: (app: DialogflowApp) => void
}