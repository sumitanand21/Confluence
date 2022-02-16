import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import { Location } from "@angular/common";
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-all-my-demands-expanded',
  templateUrl: './all-my-demands-expanded.component.html',
  styleUrls: ['./all-my-demands-expanded.component.css']
})
export class AllMyDemandsExpandedComponent implements OnInit {
opts:ISlimScrollOptions;
/* showProject:boolean=false; */
   project = [
	{value: '0', viewValue: 'Copy demand'},
    {value: '1', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
	{value: '4', viewValue: 'Modify and submit again'}
  ];
   favDemandsSelect = [
	{value: '0', viewValue: 'Copy demand'},
    {value: '1', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
  ];
   savedDemandsSelect = [
	{value: '0', viewValue: 'Search myself'},
	{value: '1', viewValue: 'Copy demand'},
    {value: '2', viewValue: 'Cancel demand'}
  ];
  selectedValue: string;
  showSubmit:boolean = false;
  
  
  
   
   /* Open demand variables   */
  showDemandSelect:boolean = false;
  demands: any;
  selectedAll: any;
  checkboxcounter:number = 0;
  
   /* Fav demand variables   */
  showDemandSelectFav:boolean = false;
  favDemands:any;
  selectedAllFav: any;
  checkboxcounterFav:number = 0;
  
  /* Saved demand variables   */
  showDemandSelectSaved:boolean = false; 
  savedDemands: any;
  selectedAllSaved: any;
  checkboxcounterSaved:number = 0;
  
  searchResult=false;show;
  constructor(private location: Location, public router: Router, public dialog: MatDialog) { 
  this.demands = [
	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
 	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      
    ],
	this.favDemands = [
	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
 	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"etaText":"ETA",
			"etaValue":"29-SEPT-2018",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      
    ],
	this.savedDemands = [
	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
 	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
     	{
			 selected: false,
         
			
			"id":"1",
			"header":"guk-m-c-pj-po-wt01",
			"demandText":"demand",
			"demandValue":"18000000",
			"position":"position",
			"positionValue":"test engineer - l3",
			"startDate":"Start date",
			"startDateValue":"29-SEPT-2018",
			"endDate":"End date",
			"endDateValue":"04-MAY-2018",
			"locationText":"Location",
			"locationValue":"Mumbai",
			
			"indentText":"indent",
			"indentValue":"03",
			"noPosText":"No of positions",
			"noPosValue":"03",
			"roleText":"Role",
			"roleValue":"test engineer - l3",
			"suiteText":"Suite",
			"suiteValue":"29-SEPT-2018",
			"expText":"Year of experience",
			"expValue":"3",
			"skillsText":"Mandatory skills",
			"skillsValue":"Angular JS4",
			"analytics":"Match check analytics"
        },
      
    ]
	
  }
  
  /*  Open demand functions */
    selectAll() {
   
    for (var i = 0; i < this.demands.length; i++) {
      this.demands[i].selected = this.selectedAll;
    }
	if(this.selectedAll== true){
		console.log(this.demands.length);
		this.checkboxcounter = this.demands.length;
		this.showDemandSelect = true;
	}
	if(this.selectedAll== false){
		this.checkboxcounter = 0;
		this.showDemandSelect = false;
	}
  }
	
  checkIfAllSelected(index) {
	   console.log('selectAllhi');
	  
	  
	   if(this.demands[index].selected == true){
		   this.checkboxcounter++;
		   console.log(this.checkboxcounter);
		 
			
	   }
	    if(this.demands[index].selected == false){
				
			this.checkboxcounter--;
			console.log( "add-", this.checkboxcounter);
			
		   
	   }
	     if(this.checkboxcounter == 0){
		   this.showDemandSelect = false;
		 
	   }
	    else if(this.checkboxcounter > 0){
		   this.showDemandSelect = true;
		   
	   }
	   
    this.selectedAll = this.demands.every(function(item:any) {
        return item.selected == true;
    })
  }
  
  /* Fav demand functions */
	selectAllFav() {
   
    for (var i = 0; i < this.favDemands.length; i++) {
      this.favDemands[i].selected = this.selectedAllFav;
    }
	if(this.selectedAllFav== true){
		console.log(this.favDemands.length);
		this.checkboxcounterFav = this.favDemands.length;
		this.showDemandSelectFav = true;
	}
	if(this.selectedAllFav== false){
		this.checkboxcounterFav = 0;
		this.showDemandSelectFav = false;
	}
  }
  
  checkIfAllSelectedFav(index) {
	   console.log('selectAllhi');
	  
	  
	   if(this.favDemands[index].selected == true){
		   this.checkboxcounterFav++;
		   console.log(this.checkboxcounterFav);
		 
			
	   }
	    if(this.favDemands[index].selected == false){
				
			this.checkboxcounterFav--;
			console.log( "add-", this.checkboxcounterFav);
			
		   
	   }
	     if(this.checkboxcounterFav == 0){
		   this.showDemandSelectFav = false;
		 
	   }
	    else if(this.checkboxcounterFav > 0){
		   this.showDemandSelectFav = true;
		   
	   }
	   
    this.selectedAllFav = this.favDemands.every(function(item:any) {
        return item.selected == true;
    })
  }
  
  /*  Saved demand functions */
    selectAllSaved() {
   
    for (var i = 0; i < this.savedDemands.length; i++) {
      this.savedDemands[i].selected = this.selectedAllSaved;
    }
	if(this.selectedAllSaved== true){
		console.log(this.savedDemands.length);
		this.checkboxcounterSaved = this.savedDemands.length;
		this.showDemandSelectSaved = true;
	}
	if(this.selectedAllSaved== false){
		this.checkboxcounterSaved = 0;
		this.showDemandSelectSaved = false;
	}
  }
	
  checkIfAllSelectedSaved(index) {
	   console.log('selectAllhi');
	  
	  
	   if(this.savedDemands[index].selected == true){
		   this.checkboxcounterSaved++;
		   console.log(this.checkboxcounterSaved);
		 
			
	   }
	    if(this.savedDemands[index].selected == false){
				
			this.checkboxcounterSaved--;
			console.log( "add-", this.checkboxcounterSaved);
			
		   
	   }
	     if(this.checkboxcounterSaved == 0){
		   this.showDemandSelectSaved = false;
		 
	   }
	    else if(this.checkboxcounterSaved > 0){
		   this.showDemandSelectSaved = true;
		   
	   }
	   
    this.selectedAllSaved = this.savedDemands.every(function(item:any) {
        return item.selected == true;
    })
  }

  ngOnInit() {
	  this.opts = {
      position: 'right',
      barBackground: '#FFF',
  }
  }
 onChange(selectedVal) {
	  /* alert(selectedVal); */
		if(selectedVal == ''){
		this.showSubmit = false;
		}
		
	   else if(selectedVal == "0" || selectedVal == "3" || selectedVal == "4"){
		   this.showSubmit = true;
		 this.router.navigate(['gotosearchallocate']);
		 	
	   }
	   else{
		  this.showSubmit = true;  
	   }
	   
	}
	onSavedChange(selectedVal){
		if(selectedVal == ''){
		this.showSubmit = false;
		}
		
	   else if(selectedVal == "1"){
		   this.showSubmit = true;
		 this.router.navigate(['gotosearchallocate']);
		 	
	   }
	   else{
		  this.showSubmit = true;  
	   }
	}
	  goBack() {
		/*   alert("ss"); */
        this.location.back(); 
		/* this.showProject=true; */
    }
	
	/* hide dropdown on click of edit */
	editDemand(){
		this.showDemandSelect = false;
	}
	editDemand2(){
		this.showDemandSelectFav = false;
	}
	editDemand3(){
		this.showDemandSelectSaved = false;
	}
 
  
}
@Component({
 selector: 'delete-demand',
    template: `<div class="col-xs-12 no_pad employee_details">

	
	<div class="col-xs-12 no_pad allPopHeader">
	<h1 class="pull-left">
		<span>Delete demand</span>
		 
	</h1>
			<button class="pull-right icon-close" mat-dialog-close aria-label="close" (click)="removeScroll()"></button>
			
		</div>
	<div class="col-xs-12 no_pad padd15">
		<div class="col-xs-12 no_pad">
		<form class="col-xs-11 no_pad popModuleName" #accordian>
		 
		 Are you sure?
  		</form>
		
  		</div>
  		
		
		<div class="col-xs-12 no_pad">
			<button class="pull-right line-btn primary-btn" mat-dialog-close aria-label="ok" (click)="closeDeleteDemand('yes')">Yes</button>
			<button class="pull-right line-btn" mat-dialog-close aria-label="cancel" (click)="closeDeleteDemand('no')">No</button>
		</div>
	</div>
	</div>`
 
})
export class DeleteDemandComponent{


}
