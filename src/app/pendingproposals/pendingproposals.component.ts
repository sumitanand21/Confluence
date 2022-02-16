import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { from } from 'rxjs/observable/from';
import {MatDialog, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR} from '@angular/material';
@Component({
  selector: 'app-pendingproposals',
  templateUrl: './pendingproposals.component.html',
  styleUrls: ['./pendingproposals.component.css']
})
export class PendingproposalsComponent implements OnInit {
names:any;
selectedAll:any;
checkboxcounter:number = 0;
showdropvalues = false;
firstquestion:boolean;
secondquestion:boolean;
thirdquestion:boolean;
fourthquestion:boolean;
submitbutton:boolean;
showSubmit: boolean;
rejectpopup:boolean;
allocatepopup:boolean;
reservepopup:boolean;
rejectpopupsubmit:string;
allocatepopupsubmit:string;
reservepopupsubmit:string;
propel:boolean;


  actions = [
    {value: '0', viewValue: 'Reserve'},
    {value: '1', viewValue: 'Allocate'},
	{value: '2', viewValue: 'Reject '},
  ];
  propelplanning = [
    {value: '4', viewValue: 'propelplan1'},
    {value: '5', viewValue: 'propelplan2'},
	{value: '6', viewValue: 'propelplan3 '},
  ];


  showfirstquestion(selectedValue)
  {
if (selectedValue == "")
{
	this.firstquestion = false;
}
else{
	//show the first question
	this.firstquestion = true;
	this.secondquestion = false;
	this.thirdquestion = false;
	this.fourthquestion = false;
	this.submitbutton = false;
	this.showSubmit = true;
}
  }
  showsecondquestion()
  {
	//show the second question
	this.firstquestion = true;
	this.secondquestion = true;
	this.thirdquestion = false;
	this.fourthquestion = false;
	this.submitbutton = false;
	this.showSubmit = true;
  }
  showthirdquestion()
  {
	//show the third question
	this.firstquestion = true;
	this.secondquestion = true;
	this.thirdquestion = true;
	this.fourthquestion = false;
	this.submitbutton = false;
	this.showSubmit = true;
  }
  showfourthquestion(radiovalue)
  {
	// //show the fourth question and submit button
	// if(radiovalue == "11")
	// {
	// 	this.firstquestion = true;
	// 	this.secondquestion = true;
	// 	this.thirdquestion = true;
	// 	this.fourthquestion = true;
	// 	this.submitbutton = true;
	// 	this.showSubmit = true;
	// }
	// else
	// {
	this.firstquestion = true;
	this.secondquestion = true;
	this.thirdquestion = true;
	this.fourthquestion = true;
	this.submitbutton = true;
	this.showSubmit = true;
//   }
}

  constructor(private location:Location, public dialog: MatDialog,public dialogsubmit: MatDialog, public dialog1: MatDialog) { 
  
    this.names = [
      {
           selected: false,
                "title": "Asset 01 - Laptop",
                "profilename": "Prakash Kumar",
          "emid":"Employee ID",
          "empid":"45657688",
          "number":"9945782345",
          "exp":"Experience",
          "expyears":"3-5 years",
          "skill":"skills",
          "skilltype":"angular js",
          "loc":"location",
          "place":"bangalore",
          "billability":"billability%",
          "billper":"50%",
          "alert":"alert",
          "alertmsg":"employee is eligible for other roles",
          "searchby":"search by attribute",
          "allocate":"proceed to allocate",
          "matchtitle":"Match %",
          "iMarketscapetitle":"iMarket scape",
          "suitetitle":"Suite",
          "Startdatetitle":"Start date",
          "Enddatetitle":"End date",
          "ERDtitle":"ERD",
          "Statustitle":"Status",
          "Agingtitle":"Aging",
          "match":"80%",
          "iMarket scape":"icon",
          "expType": "Proposed",
          "suite":"WIEH4834",
          "Startdate":"19-Sep-2017",
          "Enddate":"23-Sep-2017",
          "ERD":"23-Dec-2017",
        
          "Aging":"35 days",
          "email":"Email"

            },
         {
          selected: false,
                "title": "Asset 01 - Laptop",
                "profilename": "sekhar",
          "emid":"Employee ID",
          "empid":"45657688",
          "number":"9945782145",
          "exp":"Experience",
          "expyears":"3-5 years",
          "skill":"skills",
          "skilltype":"angular js",
          "loc":"location",
          "place":"bangalore",
          "billability":"billability%",
          "billper":"50%",
          "alert":"alert",
          "alertmsg":"employee is eligible for other roles",
          "searchby":"search by attribute",
          "allocate":"proceed to allocate",
          "matchtitle":"Match %",
          "iMarketscapetitle":"iMarket scape",
          "suitetitle":"Suite",
          "Startdatetitle":"Start date",
          "Enddatetitle":"End date",
          "ERDtitle":"ERD",
          "Statustitle":"Status",
          "Agingtitle":"Aging",
          "expType": "Expressed Interest",
          "match":"80%",
          "iMarket scape":"icon",
          "suite":"WIEH4834",
          "Startdate":"19-Sep-2017",
          "Enddate":"23-Sep-2017",
          "ERD":"23-Dec-2017",
          "Status":"Proposed",
          "Aging":"35 days",
          "email":"Email"
            },
          {
          selected: false,
                "title": "Asset 01 - Laptop",
                "profilename": "frakash",
          "emid":"Employee ID",
          "empid":"45657688",
          "number":"9945782345",
          "exp":"Experience",
          "expyears":"3-5 years",
          "skill":"skills",
          "skilltype":"angular js",
          "loc":"location",
          "place":"bangalore",
          "billability":"billability%",
          "billper":"50%",
          "alert":"alert",
          "alertmsg":"employee is eligible for other roles",
          "searchby":"search by attribute",
          "seeroles":"see eligible roles",
          "allocate":"proceed to allocate",
          "matchtitle":"Match %",
          "iMarketscapetitle":"iMarket scape",
          "suitetitle":"Suite",
          "Startdatetitle":"Start date",
          "Enddatetitle":"End date",
          "ERDtitle":"ERD",
          "Statustitle":"Status",
          "Agingtitle":"Aging",
          "expType": "Expressed Interest",
          "match":"80%",
          "iMarket scape":"icon",
          "suite":"WIEH4834",
          "Startdate":"19-Sep-2017",
          "Enddate":"23-Sep-2017",
          "ERD":"23-Dec-2017",
          "Status":"Proposed",
          "Aging":"35 days",
          "email":"Email"
            },
          {
          selected: false,
                "title": "Asset 01 - Laptop",
                "profilename": "ranju v s",
          "emid":"Employee ID",
          "empid":"45657688",
          "number":"9945782345",
          "exp":"Experience",
          "expyears":"3-5 years",
          "skill":"skills",
          "skilltype":"angular js",
          "loc":"location",
          "place":"bangalore",
          "billability":"billability%",
          "billper":"50%",
          "alert":"alert",
          "alertmsg":"contract ends within next 40days",
          "initiate":"initiate c2h process",
          "searchby":"search by attribute",
          "allocate":"proceed to allocate",
          "matchtitle":"Match %",
          "iMarketscapetitle":"iMarket scape",
          "suitetitle":"Suite",
          "Startdatetitle":"Start date",
          "Enddatetitle":"End date",
          "ERDtitle":"ERD",
          "Statustitle":"Status",
          "Agingtitle":"Aging",
          "match":"80%",
          "expType": "Proposed",
          "iMarket scape":"icon",
          "suite":"WIEH4834",
          "Startdate":"19-Sep-2017",
          "Enddate":"23-Sep-2017",
          "ERD":"23-Dec-2017",
          "Status":"Proposed",
          "Aging":"35 days",
          "email":"Email"
            },
        //  {
          // selected: false,
          //       "title": "Asset 01 - Laptop",
          //       "profilename": "Prakash Kumar",
          // "emid":"Employee ID",
          // "empid":"45657688",
          // "number":"9945782345",
          // "exp":"Experience",
          // "expyears":"3-5 years",
          // "skill":"skills",
          // "skilltype":"angular js",
          // "loc":"location",
          // "place":"bangalore",
          // "billability":"billability%",
          // "billper":"50%",
          // "alert":"alert",
          // "alertmsg":"contract ends within next 40days",
          // "searchby":"search by attribute",
          // "allocate":"proceed to allocate"
          //   },
          // {
          // selected: false,
          //       "title": "Asset 01 - Laptop",
          //       "profilename": "Prakash Kumar",
          // "empid":"45657688",
          // "number":"9945782345",
          // "exp":"Experience",
          // "expyears":"3-5 years",
          // "skill":"skills",
          // "skilltype":"angular js",
          // "loc":"location",
          // "place":"bangalore",
          // "billability":"billability%",
          // "billper":"50%",
          // "alert":"alert",
          // "alertmsg":"contract ends within next 40days",
          // "searchby":"search by attribute",
          // "allocate":"proceed to allocate"
          //   },
          
        ]
  }
  dropValuesChanged(selectedval)
  {
    debugger;
    if(selectedval == "2")
    {
      this.rejectpopup = true;
      this.reservepopup = false;
      this.allocatepopup = false;
      this.rejectpopupsubmit = "reject";
    this.dialog1.open(rejectreasonComponent,{
      width:'1000px'
    });
  document.getElementsByTagName('body')[0].classList.add("active");
  this.propel = false;
    }
    else if (selectedval =="1")
    { this.rejectpopup = false;
      this.reservepopup = false;
      this.allocatepopup = true;
      this.allocatepopupsubmit = "allocate";
      this.propel = true;
    }
    else if(selectedval == "0")
    {
      this.rejectpopup = false;
      this.reservepopup = true;
      this.allocatepopup = true;
      this.allocatepopupsubmit = "reserve";
      this.propel = false;
    }
  }
  selectAll() {
     for (var i = 0; i < this.names.length; i++) {
       this.names[i].selected = this.selectedAll;
     }
   if(this.selectedAll== true){
     console.log(this.names.length);
     this.checkboxcounter = this.names.length;
     this.showdropvalues = true;
   }
   if(this.selectedAll== false){
     this.checkboxcounter = 0;
     this.showdropvalues = false;
   }
   }
   
   checkIfAllSelected(index) {
    console.log('selectAllhi');
   
   
    if(this.names[index].selected == true){
      this.checkboxcounter++;
      console.log(this.checkboxcounter);
    
     
    }
     if(this.names[index].selected == false){
       
     this.checkboxcounter--;
     console.log( "add-", this.checkboxcounter);
     
      
    }
      if(this.checkboxcounter == 0){
      this.showdropvalues = false;
    
    }
     else if(this.checkboxcounter > 0){
      this.showdropvalues = true;
      
    }
    
   this.selectedAll = this.names.every(function(item:any) {
       return item.selected == true;
   })
 }

  ngOnInit() {
  }


  openDialogEmpolyee() {

    this.dialog.open(employeeDetailsComponent,{
      width:'1000px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  }  
  goBack(){
	  this.location.back();
  }

 
  submitmodal()
  {
    debugger;
    if(this.rejectpopup == true)
    {
    this.dialogsubmit.open(submitComponent,{
      width:'500px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  }
  else if(this.allocatepopup == true)
  { 
    this.dialogsubmit.open(submitComponent,{
      width:'500px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  }
  else if(this.reservepopup == true)
  { 
  
    this.dialogsubmit.open(submitComponent,{
      width:'500px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  }
}
}  
  

@Component({
  selector: 'app-submit-modal-page',
  templateUrl: './submit.html',
 
})
export class submitComponent{
	removeScroll(){
		document.getElementsByTagName('body')[0].classList.remove("active");
	}
}
@Component({
  selector: 'app-employeeDetails-modal-page',
  templateUrl: './employeeDetails.html',
 
})
export class employeeDetailsComponent{
	removeScroll(){
		document.getElementsByTagName('body')[0].classList.remove("active");
	}
}

@Component({
  selector: 'app-rejectreason-modal-page',
  templateUrl: './rejectreason.html',
 
})
export class rejectreasonComponent{
	removeScroll(){
		document.getElementsByTagName('body')[0].classList.remove("active");
  }
  arrayofskills:any;
  arrayofskill:any;
  arrayofpmdm:any;
 
  mandatoryskillmismatch = false;
  pmdm = false;
  resources = [
    {value: '1' , viewValue: 'Mandatory skill mismatch'},
    {value: '2' , viewValue: 'PM-DM section'},

  ];
  skills = [
    {value: '11' , viewValue: 'HTML'},
    {value: '12' , viewValue: 'Javascript'},
    {value: '13' , viewValue: 'React JS'},
    {value: '14' , viewValue: 'Angular'},
    {value: '15' , viewValue: 'Java'},
    {value: '16' , viewValue: '.Net'},
  ]
  constructor(){
    this.arrayofskills = ['Mandatory skill mismatch', 'PM-DM section'];
    this.arrayofskill = ['HTML', 'Javascript', 'React JS', 'Angular', 'Java', '.Net'];
    this.arrayofpmdm = [];
  }
  additionalfield(selval)
  {
    debugger;
    if(selval == '1')
    {
      this.pmdm = false;
      this.mandatoryskillmismatch = true;
    }
    else if(selval == '2')
    {
    this.pmdm = true;
    this.mandatoryskillmismatch = false;
    }
  }
}


