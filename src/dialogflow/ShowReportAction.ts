import { DialogflowApp } from 'actions-on-google';
import { Report } from './../models/Report.interface';
import { Record } from './../models/Record.interface';
import { SalesforceProxy } from './../salesforce/SalesforceProxy';

export const name = 'show.report';

export async function handler(dialogflowApp: DialogflowApp) {
  let salesforceProxy = new SalesforceProxy();

  // Get the Report name and the Filter.
  let reportName = dialogflowApp.getArgument('reportName') + '';
  let SObjectName = dialogflowApp.getArgument('SObjectName') + '';
  let RecordName = dialogflowApp.getArgument('RecordName') + '';
  let RecordField = dialogflowApp.getArgument('RecordField') + '';
  let RecordValue = dialogflowApp.getArgument('RecordValue') + '';
  let filter = {
    column: dialogflowApp.getArgument('filterField') + '', 
    operator: dialogflowApp.getArgument('filterOperator') + '', 
    value: dialogflowApp.getArgument('filterValue') + ''
  };
  if(reportName){
	let report :Report  = <Report> {name: reportName, filter: filter};
	  // Call Salesforce.
	let response = await salesforceProxy.showReport(report);
    dialogflowApp.ask(response.data as string);
  }
  if(SObjectName){
	let record :Record  = <Record> {sObjectName: SObjectName, recordName: RecordName,recordField: RecordField,RecordValue: RecordValue};
	  // Call Salesforce.
	let response = await salesforceProxy.createupdateRercord(record);
    dialogflowApp.ask(response.data as string);  
  }
}
