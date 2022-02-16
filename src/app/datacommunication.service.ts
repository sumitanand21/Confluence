import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatacommunicationService {

  constructor() {}
  private subject = new Subject < any > ();
  wmgtitle;
  savetitle;
  mytasks = true;
  myrequests = true;
  myleadership = false;
  myteam = true;
  mydemands = false;
  myproject = false;
  g_selectedaccountId;
  g_selectedorderId;
  g_selectedprojectId;
  g_selectedmoduleId;
  g_selectedaccountname;
  g_selectedordername;
  g_selectedprojectname;
  g_selectedmodulename;
  g_empId = 32432;
  g_accountscount;
  g_orderscount;
  g_projectscount;
  g_modulescount;
  //json having account information of the particular employee.
  g_accounts;

  //json having order information of the selected account.
  g_orders;

  //json having project information of the selected order.
  g_projects;

  //json having module information of the selected order.
  g_modules;

  //service  urls of peol server.
  // serviceUrlAccount = "http://182.72.219.94:8030/sap/web1?sap-client=900";
  // serviceUrlOrder = "http://182.72.219.94:8030/sap/order/sap-client=900";
  // serviceUrlProject = "http://182.72.219.94:8030/sap/project/sap-client=900";
  // serviceUrlModule = "http://182.72.219.94:8030/sap/module/sap-client=900";

  //service  urls of wipro server.
  serviceUrlAccount = "http://we2app02.wipro.com:8080/sap/zps_wsaccount?sap-client=200";
  serviceUrlOrder = "http://we2app02.wipro.com:8080/sap/zps_wsorders?sap-client=200";
  serviceUrlProject = "http://we2app02.wipro.com:8080/sap/zps_wsproject?sap-client=200";
  serviceUrlModule = "http://we2app02.wipro.com:8080/sap/zps_wsmodule?sap-client=200";
  setAnalytics(message: string) {
    this.subject.next(message);
  }

  getAnalytics(): Observable < any > {
    return this.subject.asObservable();
  }
}
