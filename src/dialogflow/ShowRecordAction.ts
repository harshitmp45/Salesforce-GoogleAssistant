import { DialogflowApp } from 'actions-on-google';
import { Record } from './../models/Record.interface';
import { SalesforceProxy } from './../salesforce/SalesforceProxy';

export const name = 'createupdate.record';

export async function handler(dialogflowApp: DialogflowApp) {
  let salesforceProxy = new SalesforceProxy();

  // Get the Report name and the Filter.
  let SObjectName = dialogflowApp.getArgument('SObjectName') + '';
  let RecordName = dialogflowApp.getArgument('RecordName') + '';
  let RecordField = dialogflowApp.getArgument('RecordField') + '';
  let RecordValue = dialogflowApp.getArgument('FieldValue') + '';
	let record :Record  = <Record> {sObjectName: SObjectName, recordName: RecordName, recordField: RecordField, recordValue: RecordValue};
	  // Call Salesforce.
	let response = await salesforceProxy.createupdateRercord(record);
    dialogflowApp.ask(response.data as string);
};