import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-clonesearch-expanded',
  templateUrl: './clonesearch-expanded.component.html',
  styleUrls: ['./clonesearch-expanded.component.css']
})
export class ClonesearchExpandedComponent implements OnInit {
  resources = [
    { value: '0', viewValue: 'Allocate' },
    { value: '1', viewValue: 'Reserve' },
    { value: '2', viewValue: 'Reject' },
  ];
  toggleTrue = false;
  showAccBody: boolean = false;
  showDemandSelect: boolean = false;
  demands: any;
  selectedAll: any;
  checkboxcounter: number = 0;
  showSubmit = false;
  check: any;
  names: any;
  selectedCount: any = [];
  initialCheckedCount: any = 1;
  searchResult = false;
  show;
  showSelectDrop = false;
  showOverlay = false;
  arrayOfStrings: any;
  arrayOfStringsOptionalSkill: any;
  arrayofroles: any;
  arrayoflocation: any;
  selectedValue: any;
  selectedValueOptional: any;
  model1: any;
  model2: any;
  constructor(public dialog: MatDialog, public dialogEmp: MatDialog,
    public dialogCostDeviation: MatDialog, public dialogtransBudget: MatDialog,
    public dialogBillable: MatDialog, public dialogSubmit: MatDialog, public dialogaskforhelp: MatDialog) {
    this.arrayOfStrings = ['HTML', 'Javascript', 'React JS', 'Angular', 'Java', '.Net'];
    this.arrayOfStringsOptionalSkill = ['PHP', 'Angular4', 'Ionic', 'SAAS'];
    this.arrayofroles = ['Developer L1.1', 'Tester L1.1', 'Support L1.1'];
    this.arrayoflocation = ['Banglore', 'Cochin', 'Pune'];
    this.model1 = [];
    this.model2 = [];
    this.check = [{
        "checkbox": "Allocate",

      },
      {
        "checkbox": "Notify",

      },
      {
        "checkbox": "Request unblock",

      },
      {
        "checkbox": "Save profile",

      },
      {
        "checkbox": "Reserve",

      },
      // {
      //   "checkbox":"Invest",

      // },
      // {
      //   "checkbox":"Allocate as Consultant",

      // },
    ]


    this.names = [{
        selected: false,

        "profilename": "Prakash Kumar",
        "number": "9945782345",
        "check": "CHECK BUDGET IMPACT",
        "allocate": "proceed to allocate",
        "alertmsg": "Employee is locked at BU level",
        "selectbutton": "SELECT ACTION"
      },
      {
        selected: false,
        "profilename": "Dinesh Kumar",
        "number": "9945782345",
        "check": "CHECK BUDGET IMPACT",
        "allocate": "proceed to allocate",
        "alertmsg": "There is budget insufficiency to allocate this employee",
        "alertmsg1": "Transfer budget",
        "alertmsg2": "Request cost deviation",
        "selectbutton": "SELECT ACTION",
        "para1": "You can request a cost deviation to allocate this person. Once your cost deviation request is approved by your ADH, this employee will be auto allocated to your project, and you will be notified. You will also be notified if this employee is no longer available by the time your cost deviation request is approved.",
        "para2": "If available, you can also transfer budget from another of your projects to allocate this employee."
      },
      {
        selected: false,
        "profilename": "Anu Dev",
        "number": "9945782345",
        "check": "CHECK BUDGET IMPACT",
        "allocate": "proceed to allocate",
        "alertmsg": "Remaining project budget insufficient to allocate this employee",
        "selectbutton": "SELECT ACTION"

      },
      {
        selected: false,
        "profilename": "Padma Sekhar Ayyappan",
        "number": "9945782345",
        "check": "CHECK BUDGET IMPACT",
        "allocate": "proceed to allocate",
        "selectbutton": "SELECT ACTION"

      }
    ]
  }
  expandAcc() {
    if (this.showAccBody === true) {
      this.showAccBody = false;
    } else {
      this.showAccBody = true;
    }
  }
  checkOptionIndex(i, n) {
    if (i == 0) {
      if (n == 3) {
        return false;
      } else {
        return true;
      }

    }
  }
  valueChanged(newVal) {
    this.selectedValue = newVal;
    var index = this.model1.indexOf(newVal);
    if (index == -1) {
      if (this.model1) {
        this.model1.push(newVal);
      }
    }
    this.selectedValue = '';
  }
  removeItem(n) {
    var index = this.model1.indexOf(n);
    if (index > -1) {
      this.model1.splice(index, 1);
    }

  }
  valueChangedOptionalSkill(newValue) {
    this.selectedValueOptional = newValue;
    var index = this.model2.indexOf(newValue);
    if (index == -1) {
      if (this.model2) {
        this.model2.push(newValue);
      }
    }

    this.selectedValueOptional = null;

  }
  removeItemOptionalSkill(k) {
    var index = this.model2.indexOf(k);
    if (index > -1) {
      this.model2.splice(index, 1);
    }
  }
  onChange(selectedVal) {
    /* alert(selectedVal); */
    if (selectedVal == '') {
      this.showSubmit = false;
    } else if (selectedVal == "0") {

      this.dialog.open(CloneAllocateModalComponent, {
        width: '1000px'
      });

    } {
      this.showSubmit = true;
    }

  }
  selectedCheck(e, index) {
    var x = e.source._elementRef.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id').slice(6);
    if (parseInt(x) === index) {
      if (this.selectedCount[index]) {
        if (e.checked) {
          this.initialCheckedCount = parseInt(this.initialCheckedCount);
          this.initialCheckedCount++;
          this.selectedCount[index] = this.initialCheckedCount;
        } else {
          this.initialCheckedCount--;
          this.selectedCount[index] = this.initialCheckedCount;
          if (this.initialCheckedCount == 0) {
            delete(this.selectedCount[index]);
            this.selectedCount = [];
          }
        }
        if (this.selectedCount[index].toString().length < 2) {
          this.selectedCount[index] = parseInt(this.selectedCount[index]);
        }
      } else {
        this.initialCheckedCount = 1;
        this.selectedCount[index] = this.initialCheckedCount;
      }

    }
  }
  showSelectDropdown(index) {
    this.showOverlay = true;
    var a = document.getElementById(index);
    a.setAttribute("class", "democlass");
    document.getElementsByClassName("mainContent")[0].classList.add("downArrwClass");
  }
  overlayClick() {
    document.getElementsByClassName("mainContent")[0].classList.remove("downArrwClass");
    var b = document.getElementsByClassName("democlass");
    b[0].classList.add("display_none");
    b[0].classList.remove("democlass");
    this.showOverlay = false;

  }
  selectAll() {

    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
    if (this.selectedAll == true) {
      console.log(this.names.length);
      this.checkboxcounter = this.names.length;
      this.showDemandSelect = true;
    }
    if (this.selectedAll == false) {
      this.checkboxcounter = 0;
      this.showDemandSelect = false;
    }
  }

  checkIfAllSelected(index) {
    console.log('selectAllhi');


    if (this.names[index].selected == true) {
      this.checkboxcounter++;
      console.log(this.checkboxcounter);


    }
    if (this.names[index].selected == false) {

      this.checkboxcounter--;
      console.log("add-", this.checkboxcounter);


    }
    if (this.checkboxcounter == 0) {
      this.showDemandSelect = false;

    } else if (this.checkboxcounter > 0) {
      this.showDemandSelect = true;

    }

    this.selectedAll = this.names.every(function(item: any) {
      return item.selected == true;
    })
  }
  changeEvent(ev) {
    if (ev.checked = "false") {
      this.toggleTrue = !this.toggleTrue;
    } else if (ev.checked = "true") {
      this.toggleTrue = false;
    }
  }




  openDialogEmp() {
    this.dialogEmp.open(CloneSearchEmployeeDComponent, {
      width: '1000px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  openDialogCostDev() {
    this.dialogCostDeviation.open(CloneCostDeviationDComponent, {
      width: '800px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  openDialogtransBudget() {
    this.dialogtransBudget.open(ClonetransferBudgetDComponent, {
      width: '650px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  onBlurMethod() {
    this.dialogBillable.open(CloneBillabilityModalComponent, {
      width: '400px'
    });

    document.getElementsByTagName('body')[0].classList.add("active");
  }
  submitContentModal() {
    this.dialogSubmit.open(CloneSubmitModalComponent, {
      width: '400px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  askforhelp() {
    this.dialogaskforhelp.open(ClonewmgSave1, {
      width: '700px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  ngOnInit() {}

}
@Component({
  selector: 'app-clone-billability-modal-page',
  templateUrl: './clonebillabilityPopup.html',

})
export class CloneBillabilityModalComponent {
  BillabilityClose() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-clone-submit-modal-page',
  templateUrl: './clonesubmitModal.html',

})
export class CloneSubmitModalComponent {
  submitClose() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-clone-allocate-modal-page',
  templateUrl: './cloneallocateModal.html',

})
export class CloneAllocateModalComponent {
  arrayOfStrings: any;
  arrayOfStringsOptionalSkill: any;
  arrayofroles: any;
  arrayoflocation: any;
  ShowAllocationPeriodContent = false;

  bands = [
    { value: 'b1', viewValue: 'B1' },
    { value: 'b2', viewValue: 'B2' },
    { value: 'b3', viewValue: 'B3' }
  ];
  roles = [
    { value: 'dev', viewValue: 'Developer L1.1' },
    { value: 'tester', viewValue: 'Tester L1.1' },
    { value: 'support', viewValue: 'Support L1.1' }
  ];
  locations = [
    { value: 'bang', viewValue: 'Banglore' },
    { value: 'cochin', viewValue: 'Cochin' },
    { value: 'pune', viewValue: 'Pune' }
  ];
  jobs = [
    { value: 'abc', viewValue: 'abc' },
    { value: 'abc', viewValue: 'abc' },
    { value: 'abc', viewValue: 'abc' }
  ];
  constructor(public dialog: MatDialog, ) {
    this.arrayOfStrings = ['HTML', 'Javascript', 'React JS', 'Angular', 'Java', '.Net'];
    this.arrayOfStringsOptionalSkill = ['PHP', 'Angular4', 'Ionic', 'SAAS'];
    this.arrayofroles = ['Developer L1.1', 'Tester L1.1', 'Support L1.1'];
    this.arrayoflocation = ['Banglore', 'Cochin', 'Pune'];
  }
  StaggerAllocationButton() {
    this.ShowAllocationPeriodContent = !this.ShowAllocationPeriodContent;
  }

}
@Component({
  selector: 'app-clone-SearchemployeeDetails-page',
  templateUrl: './cloneSearch_employeeDetails.html',

})
export class CloneSearchEmployeeDComponent {
  removeScrollSearch() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}

@Component({
  selector: 'app-clone-costDeviation-page',
  templateUrl: './clonecostDeviation.html',

})
export class CloneCostDeviationDComponent {
  removeScrollCost() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-clone-wmgSave1-modal-page',
  templateUrl: './clonewmgSave1.html',

})
export class ClonewmgSave1 {
  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-clone-transferBudget-page',
  templateUrl: './clonetransferBudget.html',

})
export class ClonetransferBudgetDComponent {
  standardCheck = false;
  bankICICCheck = false;
  indusindCheck = false;
  standardAdd() {

    this.standardCheck = true;
  }
  bankICAdd() {
    this.bankICICCheck = true;
  }
  indusindAdd() {
    this.indusindCheck = true;
  }

  standardRemove() {

    this.standardCheck = false;
  }
  bankICRemove() {
    this.bankICICCheck = false;
  }
  indusindRemove() {
    this.indusindCheck = false;
  }
  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
