import axios from 'axios';
import { Report } from './../models/Report.interface';

let proxyURL = 'https://harshitgoyal-developer-edition.ap5.force.com/services/apexrest';

export class SalesforceProxy {

  showReport(report: Report) {
    return axios.post(proxyURL + '/showreport', report, {headers: {'Content-Type': 'application/json'}});
  }
};
