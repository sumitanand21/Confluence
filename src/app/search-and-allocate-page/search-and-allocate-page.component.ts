import { Component, OnInit } from '@angular/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { MatDialog } from '@angular/material';
import { DatacommunicationService } from '../datacommunication.service';

@Component({
  selector: 'app-search-and-allocate-page',
  templateUrl: './search-and-allocate-page.component.html',
  styleUrls: ['./search-and-allocate-page.component.css']
})
export class SearchAndAllocatePageComponent implements OnInit {
  ShowAllocationPeriodContent = false;
  arrayOfStrings: any;
  arrayOfStringsOptionalSkill: any;
  arrayofroles: any;
  arrayoflocation: any;
  model1: any;
  model2: any;
  billableOption = false;
  investOption = false;
  selectedValue: any;
  selectedValueOptional: any;
  indent_classification = [
    { value: 'Backfill during Attrition', viewValue: 'Backfill during Attrition' },
    { value: 'Local Hire', viewValue: 'Local Hire' },
    { value: 'Localization-Replacement', viewValue: 'Localization-Replacement' },
    { value: 'New Project', viewValue: 'New Project' },
    { value: 'Ramp up (Or) Change Request in Existing Project', viewValue: 'Ramp up (Or) Change Request in Existing Project' },
    { value: 'Re-badging', viewValue: 'Re-badging' },
    { value: 'Rookie Requirement', viewValue: 'Rookie Requirement' },
    { value: 'Rotation', viewValue: 'Rotation' }
  ];
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
  constructor(public dialog: MatDialog, public dc: DatacommunicationService) {
    this.arrayOfStrings = ['HTML', 'Javascript', 'React JS', 'Angular', 'Java', '.Net'];
    this.model1 = [];
    this.arrayOfStringsOptionalSkill = ['PHP', 'Angular4', 'Ionic', 'SAAS'];
    this.model2 = [];
    this.arrayofroles = ['Developer L1.1', 'Tester L1.1', 'Support L1.1'];
    this.arrayoflocation = ['Banglore', 'Cochin', 'Pune'];
  }
  StaggerAllocationButton() {
    this.ShowAllocationPeriodContent = !this.ShowAllocationPeriodContent;
  }
  ngOnInit() {}

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
    //alert(this.selectedValueOptional);
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
  billable() {
    this.billableOption = true;
    this.investOption = false;
  }
  investment() {
    this.investOption = true;
    this.billableOption = false;
  }
  support() {
    this.billableOption = false;
    this.investOption = false;
  }
  askforhelp() {
    this.dialog.open(wmgSave, {
      width: '700px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }


}
@Component({
  selector: 'app-wmgSave-modal-page',
  templateUrl: './wmgSave.html',

})
export class wmgSave {
  constructor(public dc: DatacommunicationService) {}
  locations = ['Banglore', 'Cochin', 'Pune'];
  lang = ['Kannada', 'English', 'Hindi'];
  fulfilmode = ['Mode1', 'Mode2', 'Mode3'];
  moveto = ['To 1', 'To 2', 'To 3'];
  removeScroll() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
