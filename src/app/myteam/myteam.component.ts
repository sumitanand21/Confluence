import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR } from '@angular/material';
import { Location } from "@angular/common";
import { RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import { ISlimScrollOptions } from 'ng2-slimscroll';


@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {
  optemp: ISlimScrollOptions;
  optcont: ISlimScrollOptions;
  optrook: ISlimScrollOptions;
  myteamback: boolean = true;
  selectedEmployees1 = true;
  showdropvalues2 = false;
  showEditOptionsFlgAllocate: boolean = false;
  showdropvaluesAll: boolean = false;
  /**************************************************************
   * Questions for the Employee Tab     (Variables)              *
   ***************************************************************/
  showdropvaluesEmp = false;
  empRolesList = [];
  selectAction;
  selectActionType;
  selectedValue: string;
  showEmployeesSubmitBtn: boolean;
  showRampedDownOpt: boolean;
  showNcRelease: boolean;
  showNgRelease: boolean;
  showChangeLocation: boolean;
  showChangeRole: boolean;
  showNormalRelease: boolean;
  showBackfillDet: boolean;
  showRole: boolean;
  showProject: boolean;
  showEditOptionsEmpFlg: boolean;
  showChangedBillingPercent: boolean;
  extendregion: boolean;
  propelplanning: boolean;
  resources = [
    { value: '0', viewValue: 'Change billing sub catagory' },
    { value: '1', viewValue: 'Edit assignment ' },
    { value: '2', viewValue: 'Change location' },
    { value: '3', viewValue: 'Change project' },
    { value: '4', viewValue: 'Change role' },
    { value: '5', viewValue: 'Change propel plan' },

  ];
  ncReleasePlans = [
    { value: '0', viewValue: 'Additional Responsibility' },
    { value: '1', viewValue: 'Backfill with Employee' },
    { value: '2', viewValue: 'Backfill with Openindent' },
    { value: '3', viewValue: 'Release' }
  ];
  ngCategories = [
    { value: '0', viewValue: 'Hyper-Automation' },
    { value: '1', viewValue: 'Process-Improvement' }
  ];
ngReasn = [
    { value: '0', viewValue: 'Attrition without Backfill' },
    { value: '1', viewValue: 'Contractual Commitments - Renewal Deals' },
    { value: '2', viewValue: 'Movement into a new FPP project within the same account' },
    { value: '3', viewValue: 'Movement into any FPP project in different account' },
    { value: '4', viewValue: 'Movement into any T&M project either in the same account or any other account' },
    { value: '5', viewValue: 'Movement into existing FPP project within the same account with additional Revenue, confirmed by BFM movement to the free pool' }
  ];
  propelReasons = [
    { value: '0', viewValue: 'Confirmed Extention' },
    { value: '1', viewValue: 'Confirmed Ramp-Down-Already planned for billing' },
    { value: '2', viewValue: 'Confirmed Ramp-Down-Employee is not available (Leave, Attrition, etc)' },
    { value: '3', viewValue: 'Confirmed Ramp-Down-No billing plan and being released' }
  ];
  billingStatus = [
    { value: '0', viewValue: 'N' },
    { value: '1', viewValue: 'Status1' },
    { value: '1', viewValue: 'Status2' }
  ];
  billingSubCategoryReason = [
    { value: '0', viewValue: 'Reason 1' },
    { value: '1', viewValue: 'Reason 2' },
    { value: '2', viewValue: 'Reason 3' }
  ];
  destProj = [
    { value: '0', viewValue: 'Project 1' },
    { value: '1', viewValue: 'Project 2' },
    { value: '2', viewValue: 'Project 3' }
  ];


  /**************************************************************
   * Questions for the Contractors Tab     (Variables)              *
   ***************************************************************/
  showdropvaluesCont = false;
  resourcesCont = [
    { value: '0', viewValue: 'Initiate C2H' },
    { value: '1', viewValue: 'Replacement' },
    { value: '2', viewValue: 'Extend' },
    { value: '3', viewValue: 'Shrink' }
  ];


  /**************************************************************
   * Questions for the Investment Tab     (Variables)              *
   ***************************************************************/
  showdropvaluesRook = false;
    resourcesRook = [
    { value: '0', viewValue: 'Convert to billable' },
    { value: '1', viewValue: 'extend' },
    { value: '2', viewValue: 'shrink' },
    { value: '3', viewValue: 'deallocation' }
  ];
  /*Allocated/ reserved tab*/
  deallocatefunc(data) {
    if (data == "") {
      this.showEditOptionsFlgAllocate = false;
    } else {
      this.showEditOptionsFlgAllocate = true;
    }
  }
  /*End Allocated/ reserved tab*/
  /**************************************************************
   * Questions for the Employee Tab      (Functions)             *
   ***************************************************************/
  dropValuesChanged(selectedValue) {
    if (selectedValue == '1') {
      this.showRole = false;
      this.showProject = false;
      this.showEditOptionsEmpFlg = true;
      this.showChangeLocation = false;
      this.showEmployeesSubmitBtn = false;
      this.showChangeRole = false;
      this.selectActionType = false;
      this.selectAction = false;
      this.propelplanning = false;

    } else if (selectedValue == '2') {
      this.editOptionsEmpChanged("0"); // 0 is used as an others condition to make all show values false on change of option
      this.showRole = false;
      this.showProject = false;
      this.showEditOptionsEmpFlg = false;
      this.showChangeLocation = true;
      this.showEmployeesSubmitBtn = true;
      this.showChangeRole = false;
      this.selectActionType = false;
      this.selectAction = false;
      this.propelplanning = false;
    } else if (selectedValue == '3') {
      this.editOptionsEmpChanged("0");
      this.showRole = false;
      this.showProject = true;
      this.showEmployeesSubmitBtn = true;
      this.showEditOptionsEmpFlg = false;
      this.showChangeLocation = false;
      this.showChangeRole = true;
      this.selectActionType = false;
      this.selectAction = false;
      this.propelplanning = false;
    } else if (selectedValue == '4') {
      this.editOptionsEmpChanged("0");
      this.showRole = true;
      this.showProject = false;
      this.showEmployeesSubmitBtn = true;
      this.showEditOptionsEmpFlg = false;
      this.showChangeLocation = false;
      this.showChangeRole = true;
      this.selectActionType = false;
      this.selectAction = false;
      this.propelplanning = false;
    } else if (selectedValue == '5') {
      this.editOptionsEmpChanged("0");
      this.showRole = false;
      this.showProject = false;
      this.showEmployeesSubmitBtn = true;
      this.showEditOptionsEmpFlg = false;
      this.showChangeLocation = false;
      this.showChangeRole = false;
      this.selectActionType = false;
      this.selectAction = false;
      this.propelplanning = true;
    }
  }
  editOptionsEmpChanged(data) {
    debugger;
    if (data == '1') {
      this.showRampedDownOpt = true;
      this.showChangedBillingPercent = false;
      this.showEmployeesSubmitBtn = false;
      this.extendregion = false;
    } else if (data == '2') {
      this.showRampedDownOpt = false;
      this.showChangedBillingPercent = true;
      this.showEmployeesSubmitBtn = true;
      this.extendregion = false;
    } else if (data == '25') {
      this.showRampedDownOpt = false;
      this.showChangedBillingPercent = false;
      this.showEmployeesSubmitBtn = true;
      this.extendregion = true;
    } else {
      this.showRampedDownOpt = false;
      this.showChangedBillingPercent = false;
      this.showEmployeesSubmitBtn = false;
      this.extendregion = false;
    }
  }
  showReleaseType(data) {
    if (data == '3') {
      this.showNcRelease = true;
      this.showNgRelease = false;
      this.showNormalRelease = false;
      this.showEmployeesSubmitBtn = true;
    } else if (data == '4') {
      this.showNcRelease = false;
      this.showNgRelease = true;
      this.showNormalRelease = false;
      this.showEmployeesSubmitBtn = true;
    } else if (data == '5') {
      this.showNcRelease = false;
      this.showNgRelease = false;
      this.showNormalRelease = true;
      this.showEmployeesSubmitBtn = true;
    }
  }
  ncReleasePlanChanged(data) {
    if (data == '0' || data == '1' || data == '2') {
      this.showBackfillDet = true;
    } else {
      this.showBackfillDet = false;
    }
  }

  /*******************************************************************************/
  /*select all for employees tab*/
  selectAll() {

    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
      if (this.empRolesList.indexOf(this.names[i]) > -1) {

      }
      this.empRolesList.push(this.names[i]);
    }
    if (this.selectedAll == true) {
      console.log(this.names.length);
      this.checkboxcounter = this.names.length;
      this.showdropvaluesEmp = true;
    }
    if (this.selectedAll == false) {
      this.empRolesList = [];
      this.checkboxcounter = 0;
      this.showdropvaluesEmp = false;
    }
  }

  checkIfAllSelected(index) {
    console.log('selectAllhi');


    if (this.names[index].selected == true) {
      this.checkboxcounter++;
      this.empRolesList.push(this.names[index]);
      console.log(this.empRolesList);
    }
    if (this.names[index].selected == false) {
      var indexofvar = this.empRolesList.indexOf(this.names[index]);
      this.empRolesList.splice(indexofvar, 1)
      this.checkboxcounter--;
      console.log("add-", this.checkboxcounter);
    }
    if (this.checkboxcounter == 0) {
      this.showdropvaluesEmp = false;

    } else if (this.checkboxcounter > 0) {
      this.showdropvaluesEmp = true;
    }
    this.selectedAll = this.names.every(function(item: any) {
      return item.selected == true;
    })
  }


  /*select all for contractors tab*/
  selectAll1() {

    for (var i = 0; i < this.names1.length; i++) {
      this.names1[i].selected = this.selectedAll1;
    }
    if (this.selectedAll1 == true) {
      console.log(this.names1.length);
      this.checkboxcounter1 = this.names1.length;
      this.showdropvaluesCont = true;
    }
    if (this.selectedAll1 == false) {
      this.checkboxcounter1 = 0;
      this.showdropvaluesCont = false;
    }
  }

  checkIfAllSelected1(index) {
    console.log('selectAllhi');


    if (this.names1[index].selected == true) {
      this.checkboxcounter1++;
      console.log(this.checkboxcounter1);


    }
    if (this.names1[index].selected == false) {

      this.checkboxcounter1--;
      console.log("add-", this.checkboxcounter1);


    }
    if (this.checkboxcounter1 == 0) {
      this.showdropvaluesCont = false;

    } else if (this.checkboxcounter1 > 0) {
      this.showdropvaluesCont = true;

    }

    this.selectedAll1 = this.names1.every(function(item: any) {
      return item.selected == true;
    })
  }


  /*select all for rookies tab*/
  selectAll2() {
    debugger;
    for (var i = 0; i < this.names2.length; i++) {
      this.names2[i].selected = this.selectedAll2;
    }
    if (this.selectedAll2 == true) {
      console.log(this.names2.length);
      this.checkboxcounter2 = this.names2.length;
      this.showdropvaluesRook = true;
    }
    if (this.selectedAll2 == false) {
      this.checkboxcounter2 = 0;
      this.showdropvaluesRook = false;
    }
  }

  checkIfAllSelected2(index) {
    console.log('selectAllhi');


    if (this.names2[index].selected == true) {
      this.checkboxcounter2++;
      console.log(this.checkboxcounter2);


    }
    if (this.names2[index].selected == false) {

      this.checkboxcounter2--;
      console.log("add-", this.checkboxcounter2);


    }
    if (this.checkboxcounter2 == 0) {
      this.showdropvaluesRook = false;

    } else if (this.checkboxcounter2 > 0) {
      this.showdropvaluesRook = true;

    }

    this.selectedAll2 = this.names2.every(function(item: any) {
      return item.selected == true;
    })
  }


  /*select all for rookies tab*/
  selectAll4() {
    debugger;
    for (var i = 0; i < this.names4.length; i++) {
      this.names4[i].selected = this.selectedAll4;
    }
    if (this.selectedAll4 == true) {
      console.log(this.names4.length);
      this.checkboxcounter4 = this.names4.length;
      this.showdropvaluesAll = true;
    }
    if (this.selectedAll4 == false) {
      this.checkboxcounter4 = 0;
      this.showdropvaluesAll = false;
    }
  }

  checkIfAllSelected4(index) {
    console.log('selectAllhi');


    if (this.names4[index].selected == true) {
      this.checkboxcounter4++;
      console.log(this.checkboxcounter4);


    }
    if (this.names4[index].selected == false) {

      this.checkboxcounter4--;
      console.log("add-", this.checkboxcounter4);


    }
    if (this.checkboxcounter4 == 0) {
      this.showdropvaluesAll = false;

    } else if (this.checkboxcounter4 > 0) {
      this.showdropvaluesAll = true;

    }

    this.selectedAll4 = this.names4.every(function(item: any) {
      return item.selected == true;
    })
  }


  /******************************************************************************/
  /*select all for ramped down*/
  checkIfAllSelected3(index) {

    console.log('selectAllhi');


    if (this.names2[index].selected == true) {
      this.checkboxcounter2++;
      console.log(this.checkboxcounter2);


    }
    if (this.names2[index].selected == false) {

      this.checkboxcounter2--;
      console.log("add-", this.checkboxcounter2);


    }
    if (this.checkboxcounter2 == 0) {
      this.showdropvalues2 = false;

    } else if (this.checkboxcounter2 > 0) {
      this.showdropvalues2 = true;

    }

    this.selectedAll2 = this.names2.every(function(item: any) {
      return item.selected == true;
    })
  }

  /******************************************************************************/
  showresources2() {
    this.showdropvaluesRook = !this.showdropvaluesRook;
  }
  selectedEmployees = false;selectedBtn;
  showonlyselectedemp() {
    this.selectedEmployees = true;
    this.selectedEmployees1 = false;
  }
  previouslyramped = true;
  my_team_header_btn_active = false;
  selectedEmployeesrampsave = false
  showrampsaveprof(data: string) {
    this.myteamback = false;
    this.my_team_header_btn_active = true;
    this.previouslyramped = false;
    this.selectedEmployees1 = false;
    this.selectedEmployees = false;
    this.selectedEmployeesrampsave = true;
    this.selectedBtn = data;

    console.log("data", this.selectedBtn);
  }
  showhomepagemyteam() {
    this.selectedEmployees1 = true;
    this.selectedEmployees = false;
  }

  checked = false;
  /* 1st checkbox*/
  checkboxcounter: number = 0;
  names: any;
  selectedAll: any;
  /* 2st checkbox*/
  /* showdropvalues1:boolean = false; */
  checkboxcounter1: number = 0;
  names1: any;
  selectedAll1: any;searchResult = false;show;
  /* 3st checkbox*/
  /* showdropvalues1:boolean = false; */
  checkboxcounter2: number = 0;
  names2: any;
  selectedAll2: any;

  checkboxcounter4: number = 0;
  names4: any;
  selectedAll4: any;


  constructor(public dialog: MatDialog, private location: Location, public dialog1: MatDialog, public dialog2: MatDialog) {

    this.names = [{
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "sekhar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782145",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "frakash",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "seeroles": "see eligible roles",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "ranju v s",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "contract ends within next 40days",
        "initiate": "initiate c2h process",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },

    ]




    this.names4 = [{
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "sekhar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782145",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "frakash",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "seeroles": "see eligible roles",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "ranju v s",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "contract ends within next 40days",
        "initiate": "initiate c2h process",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },

    ]





    this.names1 = [{
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "sekhar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782145",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "frakash",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "seeroles": "see eligible roles",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "ranju v s",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "contract ends within next 40days",
        "initiate": "initiate c2h process",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },

    ]



    this.names2 = [{
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "sekhar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782145",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "frakash",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "seeroles": "see eligible roles",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Team Lead"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "ranju v s",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "contract ends within next 40days",
        "initiate": "initiate c2h process",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "emid": "Employee ID",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Consultant",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },
      {
        selected: false,
        "title": "Asset 01 - Laptop",
        "profilename": "Prakash Kumar",
        "empid": "45657688",
        "number": "9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "skills",
        "skilltype": "angular js",
        "loc": "location",
        "place": "bangalore",
        "billability": "billability%",
        "billper": "50%",
        "alert": "alert",
        "alertmsg": "Up for propel planning",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "expType": "Fresher",
        "currentRole": "Developer",
        "propelplanning": "Complete Propel Planning"
      },

    ]
  }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }
  myMethod() {
    this.searchResult = true;
  }
  hideMenu(index) {
    this.show = index;
  }
  showMenu() {
    this.show = false;
  }


  /*  openDialog() {
  
    this.dialog.open(ProceedtoallocateComponent,{panelClass: 'proceedtoallocate'}) ;
   
  }  */
  openDialogEmpolyee() {

    this.dialog1.open(EmployeeDetailsModalComponent, {
      width: '1000px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }

  openpropelplanning() {
    this.dialog2.open(PropelPlanningComponent, {
      width: '900px',
      height: '350px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }

}

@Component({
  selector: 'app-employeeDetails-modal-page',
  templateUrl: './employeeDetailsDialog.html',

})
export class EmployeeDetailsModalComponent {

  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}



@Component({
  selector: 'app-propelplanning-modal-page',
  templateUrl: './propelplanning.html',

})
export class PropelPlanningComponent {

  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
  firstoption: boolean;
  secondoption: boolean;
  thirdoption: boolean;
  resources = [
    { value: '12', viewValue: 'Confirmed Extention' },
    { value: '13', viewValue: 'Confirmed Ramp-Down-Already planned for billing' },
    { value: '14', viewValue: 'Confirmed Ramp-Down-Employee is not available (Leave, Attrition, etc)' },
    { value: '15', viewValue: 'Confirmed Ramp-Down-No billing plan and being released' }

  ];
  constructor() {}
  showpropel(selval) {
    if (selval == '0') {
      this.firstoption = true;
    } else if (selval == '1') {
      this.secondoption = true;
      this.firstoption = false;
    } else if (selval == '2') {
      this.thirdoption = true;
      this.firstoption = false;
    }
  }

}
