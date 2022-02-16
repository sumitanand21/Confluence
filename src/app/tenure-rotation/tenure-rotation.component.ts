import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ISlimScrollOptions } from 'ng2-slimscroll';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tenure-rotation',
  templateUrl: './tenure-rotation.component.html',
  styleUrls: ['./tenure-rotation.component.css']
})
export class TenureRotationComponent implements OnInit {
  /****************************
   * Variable Declaraion    *
   *****************************/
  names: any;
  selectedAll: any;
  checkboxcounter: number = 0;

  /****************************
   * Constructor        *
   *****************************/
  constructor(private location: Location, public dialogSubmit: MatDialog) {

    /****************************
     * Employees List       *
     *****************************/
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
        "alertmsg": "employee is eligible for other roles",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
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
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
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
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
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
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
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
        "alertmsg": "contract ends within next 40days",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
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
        "alertmsg": "contract ends within next 40days",
        "searchby": "search by attribute",
        "allocate": "proceed to allocate",
        "tenure_lable": "Tenure(in days)",
        "tenure": "1024"
      }
    ]



  }

  ngOnInit() {}
  goBack() {
    this.location.back();
  }
  /****************************
   * Select All Check Box   *
   *****************************/
  selectAll() {

    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
    if (this.selectedAll == true) {
      console.log(this.names.length);
      this.checkboxcounter = this.names.length;
    }
    if (this.selectedAll == false) {
      this.checkboxcounter = 0;
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
    this.selectedAll = this.names.every(function(item: any) {
      return item.selected == true;
    })
  }
  openmodal() {
    this.dialogSubmit.open(coreComponent, {
      width: '400px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }


}

@Component({
  selector: 'app-core-modal-page',
  templateUrl: './core.html',

})
export class coreComponent {
  submitClose() {
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
  accounts = [{ "accoutName": "Pitney Bows", "corePercent": "25" },
    { "accoutName": "Philips", "corePercent": "25" },
    { "accoutName": "CISCO", "corePercent": "25" },
    { "accoutName": "OKIDATA", "corePercent": "25" },
    { "accoutName": "Smart Technologies ULC", "corePercent": "25" },
    { "accoutName": "Xerox", "corePercent": "25" }
  ];
}
