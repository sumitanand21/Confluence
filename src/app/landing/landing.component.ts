  import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContextMenuService, ContextMenuComponent } from 'angular2-contextmenu';
import { DatacommunicationService } from '../datacommunication.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  locations = [
    { value: 'Bangalore', viewValue: 'Bangalore' },
    { value: 'Pune', viewValue: 'Pune' },
    { value: 'Chennai', viewValue: 'Chennai' }
  ];
  projects = [
    { value: 'Project-1', viewValue: 'Project-1' },
    { value: 'Project-2', viewValue: 'Project-2' },
    { value: 'Project-3', viewValue: 'Project-3' }
  ];
  roles = [
    { value: 'Manager', viewValue: 'Manager' },
    { value: 'Business-analyst', viewValue: 'Business analyst' },
    { value: 'Project-manager', viewValue: 'Project manager' }
  ];
  modalTypes = [
    { value: 'BU-driven', viewValue: 'BU driven' },
    { value: 'BU-driven1', viewValue: 'BU driven 2' },
    { value: 'BU-driven2', viewValue: 'BU-driven 3' }
  ];

  showtabcontent = 1;
  rightcontent = "enuview";
  enuSearch = false;
  searchResult = false;
  show;
  overley_search = false;
  /**********added for global search**********/
  secondPage = false;
  firstPage = true;
  datesIndex;
  showNextPage(index) {
    this.firstPage = false;
    this.secondPage = true;
    this.datesIndex = index;
  }
  showFirstPage() {
    this.firstPage = true;
    this.secondPage = false;
  }
  addColorModule = false;
  colorModule() {
  
    this.addColorModule = true;
  }
  /***************************/
  showReport = false;
  message: any;
  subscription: Subscription;
  showAccount: boolean;
  showOrder: boolean;
  showEnuPanel: boolean;
  showAccountPanel: boolean;
  showOrderPanel: boolean;
  showProject: boolean;
  showEnu: boolean;
  showProjectPanel: boolean;
  showProjectCollapse: boolean;
  showAccountCollapse: boolean;
  showEnuCollapse: boolean;
  collapaseToOneLine: boolean;
  activeOneLine;
  ENUActive: boolean;
  AccountActive: boolean;
  OrderActive: boolean;
  ProjectActive: boolean;
  showCollapse = [];
  showFilterContent = false;
  addFavouriteAcc = false;
  addFavouriteOrder = false;
  addFavouriteProject = false;
  addFavouriteModule = false;
  constructor(public dataServiceCall: DatacommunicationService,public http: Http, public dialog: MatDialog, private contextMenuService: ContextMenuService) {
    this.showEnu = true;
    this.showAccount = false;
    this.showOrder = false;
    this.showProject = false;
    this.showEnuPanel = true;
    this.showAccountPanel = true;
    this.showOrderPanel = true;
    this.showProjectPanel = true;
    this.showProjectCollapse = true;
    this.showAccountCollapse = true;
    this.showEnuCollapse = true;
    this.collapaseToOneLine = false;
  }


  ngOnInit() {
    this.subscription = this.dataServiceCall.getAnalytics().subscribe(message => {
      this.message = message;
      if (this.message != 'report') {
        this.rightcontent = this.message;
        this.showReport = false;
      
      } else {
        this.showReport = true;
       
      }
    });
    /*var heights = document.getElementsByClassName('rgtcontent_down')[0].clientHeight;
    document.getElementsByClassName("left_navigation").style.height = heights + "px";*/
    //fetching the account information based on employee Id
    let fetchAccount = { "empId": this.dataServiceCall.g_empId }
    // const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Basic REVWRUxPUEVSMDAxOnBlb2xAMTIzNA==' });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.dataServiceCall.serviceUrlAccount, fetchAccount, options).subscribe((res: Response) => {
        if(res.status == 200)
        {
      this.dataServiceCall.g_accounts = res.json();
      this.dataServiceCall.g_accountscount = this.dataServiceCall.g_accounts.length;
        }
    });

  }


  /***************add module popup*************************/
  getAnalyticsView(rightcontentname) {
    this.rightcontent = rightcontentname;
    this.showReport = false;
  }

  /* navigation from 1st to 2nd tab */
  accountView(index, accountId) {
    let fetchOrder;
    if (this.dataServiceCall.g_selectedaccountId != accountId || this.dataServiceCall.g_selectedaccountId == null || this.dataServiceCall.g_selectedaccountId == undefined) {
      this.dataServiceCall.g_selectedaccountId = accountId;
      let indexpos = this.dataServiceCall.g_accounts.findIndex(x => x.account == accountId);
           this.dataServiceCall.g_selectedaccountname = this.dataServiceCall.g_accounts[indexpos]["account_desc"];
      //fetching the order information based on selected account.
      fetchOrder = {
        "empId": this.dataServiceCall.g_empId,
        "account": this.dataServiceCall.g_selectedaccountId
      }
      // const headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Basic REVWRUxPUEVSMDAxOnBlb2xAMTIzNA==' });
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      this.http.post(this.dataServiceCall.serviceUrlOrder, fetchOrder, options).subscribe((res: Response) => {
        this.dataServiceCall.g_orders = res.json().orders;
        this.dataServiceCall.g_orderscount = this.dataServiceCall.g_orders.length;
      });
    }
    this.showReport = false;
    this.rightcontent = index;
    this.showAccount = true;
    this.showAccountPanel = true;
    this.showEnuPanel = false;
    this.showProjectPanel = true;
    this.activeOneLine = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }

  /* navigation from 2nd to 3rd tab */
  orderView(index, orderId) {
    let fetchProject;
    if (this.dataServiceCall.g_selectedorderId != orderId || this.dataServiceCall.g_selectedorderId == null || this.dataServiceCall.g_selectedorderId == undefined) {
      this.dataServiceCall.g_selectedorderId = orderId;
      let indexpos = this.dataServiceCall.g_orders.findIndex(x => x.orderid == orderId);
      this.dataServiceCall.g_selectedordername = this.dataServiceCall.g_orders[indexpos]["ordername"];
      //fetching the project information based on selected order.
      fetchProject = {
        "empId": this.dataServiceCall.g_empId,
        "account": this.dataServiceCall.g_selectedaccountId,
        "orderid": this.dataServiceCall.g_selectedorderId
      }
      // const headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Basic REVWRUxPUEVSMDAxOnBlb2xAMTIzNA==' });
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      this.http.post(this.dataServiceCall.serviceUrlProject, fetchProject, options).subscribe((res: Response) => {
        this.dataServiceCall.g_projects = res.json().projects;
        this.dataServiceCall.g_projectscount = this.dataServiceCall.g_projects.length;
      });
    }
    this.showReport = false;
    this.rightcontent = index;
    this.showOrder = true;
    this.showOrderPanel = true;
    this.showAccountPanel = false;
    this.showProjectPanel = true;
    this.activeOneLine = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = false;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;

  }

  /* navigation from 3rd to 4th tab */
  projectView(index, projectId) {
    let fetchModule;
    if (this.dataServiceCall.g_selectedprojectId != projectId || this.dataServiceCall.g_selectedprojectId == null || this.dataServiceCall.g_selectedprojectId == undefined) {
      this.dataServiceCall.g_selectedprojectId = projectId;
      let indexpos = this.dataServiceCall.g_projects.findIndex(x => x.projectid == projectId);
      this.dataServiceCall.g_selectedprojectname = this.dataServiceCall.g_projects[indexpos]["projectname"];
      //fetching the module information based on selected project.
      fetchModule = {
        "empId": this.dataServiceCall.g_empId,
        "account": this.dataServiceCall.g_selectedaccountId,
        "orderid": this.dataServiceCall.g_selectedorderId,
        "projectid": this.dataServiceCall.g_selectedprojectId
      }
      // const headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Basic REVWRUxPUEVSMDAxOnBlb2xAMTIzNA==' });
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      this.http.post(this.dataServiceCall.serviceUrlModule, fetchModule, options).subscribe((res: Response) => {
        this.dataServiceCall.g_modules = res.json().modules;
        this.dataServiceCall.g_modulescount = this.dataServiceCall.g_modules.length;
      });
    }
    this.showReport = false;
    this.rightcontent = index;
    this.showProject = true;
    this.showOrderPanel = false;
    this.showProjectPanel = true;
    this.activeOneLine = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = true;
    this.dataServiceCall.myleadership = true;

  }

  /* 1st tab */
  goToEnuView(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = true;
    this.showAccount = false;
    this.showOrder = false;
    this.showProject = false;
    this.showCollapse = [];
    this.collapaseToOneLine = false;
    this.ENUActive = false;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }
  viewfullEnu(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = true;
    this.showAccount = false;
    this.showOrder = false;
    this.showProject = false;
    this.showCollapse = [];
    this.ENUActive = false;
    this.activeOneLine = index;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
    
  }
  removeEnuSingleLine(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = true;
    this.showAccount = false;
    this.showOrder = false;
    this.showProject = false;
    this.showCollapse = [];
    this.ENUActive = false;
    this.collapaseToOneLine = false;
    this.activeOneLine = false;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }

  /* 2nd tab */
  goToAccountView(index) {
    this.showReport = false;
    this.showAccountPanel = true;
    this.showAccount = true;
    this.showProject = false;
    this.showOrder = false;
    this.showCollapse = [];
    this.activeOneLine = 'accountview';
    this.ProjectActive = false;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  
  }
  viewfullAccount(index) {
    this.showReport = false;
    this.showAccountPanel = true;
    this.showAccount = true;
    this.showProject = false;
    this.showOrder = false;
    this.showCollapse = [];
    this.ProjectActive = false;
    this.activeOneLine = index;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  
  }
  removeAccSingleLine(index) {
    this.showReport = false;
    this.showAccountPanel = true;
    this.showAccount = true;
    this.showProject = false;
    this.showOrder = false;
    this.showCollapse = [];
    this.ProjectActive = false;
    this.collapaseToOneLine = false;
    this.activeOneLine = false;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }
  /* 3rd tab */
  goToOrderView(index) {
    this.showReport = false;
    this.showOrder = true;
    this.showOrderPanel = true;
    this.showCollapse = [];
    this.showProject = false;
    this.OrderActive = false;
    this.activeOneLine = 'orderview';
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = false;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }
  viewfullOrder(index) {
    debugger;
    this.showReport = false;
    this.showProject = false;
    this.showOrder = true;
    this.showOrderPanel = true;
    this.showCollapse = [];
    this.OrderActive = false;
    this.activeOneLine = index;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = false;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }
  removeOrderSingleLine(index) {
    this.showReport = false;
    this.showProject = false;
    this.showOrder = true;
    this.showOrderPanel = true;
    this.showCollapse = [];
    this.OrderActive = false;
    this.collapaseToOneLine = false;
    this.activeOneLine = false;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = false;
    this.dataServiceCall.mydemands = false;
    this.dataServiceCall.myproject = false;
    this.dataServiceCall.myleadership = false;
  }

  /* 4th tab */
  goToProjectView(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = false;
    this.showAccount = true;
    this.showOrder = true;
    this.showProject = true;
    this.showCollapse = [];
    this.activeOneLine = 'projectview';
    this.ProjectActive = false;
    this.rightcontent = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = true;
    this.dataServiceCall.myleadership = true;
  }
  viewfullProject(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = false;
    this.showAccount = true;
    this.showOrder = true;
    this.showProject = true;
    this.showCollapse = [];
    this.ProjectActive = false;
    this.activeOneLine = index;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = true;
    this.dataServiceCall.myleadership = true;
  }
  removeProjectSingleLine(index) {
    this.showReport = false;
    this.showEnu = true;
    this.showEnuPanel = false;
    this.showAccount = true;
    this.showOrder = true;
    this.showProject = true;
    this.showCollapse = [];
    this.ProjectActive = false;
    this.collapaseToOneLine = false;
    this.activeOneLine = false;
    this.dataServiceCall.mytasks = true;
    this.dataServiceCall.myrequests = true;
    this.dataServiceCall.myteam = true;
    this.dataServiceCall.mydemands = true;
    this.dataServiceCall.myproject = true;
    this.dataServiceCall.myleadership = true;
  }
  goToAnalytics(index) {
    this.showReport = false;
    this.rightcontent = index;
  }

  /* Collapse the opened 4th tab's body */
  collapseMenu(index) {

    this.showCollapse[index] = true;
    //this.showProjectPanel=!this.showProjectPanel;
  }
  OpenSearchView(index) {
    this.showCollapse[index] = false;
  }

  /* Collapse the entire vertical menu to single line vertical menu */
  oneLineMenu(index) {
    this.activeOneLine = index;
    this.collapaseToOneLine = !this.collapaseToOneLine;
  }


  showTab(index) {
    this.showtabcontent = index;
  }
  gotoview(index) {
    this.rightcontent = index;
  }
  openDialog() {
    this.dialog.open(AddModuleModalComponent, {
      width: '800px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  myMethod() {
    this.searchResult = true;
    this.overley_search = true;
  }
  hideMenu(index) {
    this.show = index;
  }
  showMenu() {
    this.show = false;
  }
  hideSearch() {
    this.searchResult = false;
    this.overley_search = false;
  }



  @ViewChild(ContextMenuComponent) public contextMenu: ContextMenuComponent;
  @ViewChild('stdbankMenu') public stdbankMenu: ContextMenuComponent;
  @ViewChild('sunwestMenu') public sunwestMenu: ContextMenuComponent;
  @ViewChild('neworderMenu') public neworderMenu: ContextMenuComponent;
  @ViewChild('projectMenu') public projectMenu: ContextMenuComponent;
  @ViewChild('moduleMenu') public moduleMenu: ContextMenuComponent;
  makeFavouriteAcc() {
    this.addFavouriteAcc = true;
  }
  makeFavouriteOrder() {
    this.addFavouriteOrder = true;
  }
  makeFavouriteProject() {
    this.addFavouriteProject = true;
  }
  makeFavouriteModule() {
    this.addFavouriteModule = true;
  }
}
@Component({
  selector: 'app-addModule-modal-page',
  templateUrl: './addModule.html',

})
export class AddModuleModalComponent {
  modalTypes = [
    { value: 'BU-driven', viewValue: 'BU driven' },
    { value: 'BU-driven1', viewValue: 'BU driven 2' },
    { value: 'BU-driven2', viewValue: 'BU-driven 3' }
  ];
  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
