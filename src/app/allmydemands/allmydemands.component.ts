import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-allmydemands',
  templateUrl: './allmydemands.component.html',
  styleUrls: ['./allmydemands.component.css']
})
export class AllmydemandsComponent implements OnInit {
  selecteddemand: string;
  selectedValue: string;
  selectedValue2: string;
  selecteddemands2 : string;
  selectedValue3: string;
  selecteddemands3 : string;
  isEditableOpen1:boolean = false;
  isEditableOpen2:boolean = false;
  isEditableFav1:boolean = false;
  isEditableFav2:boolean = false;
  isEditableSave1:boolean = false;
  isEditableSave2:boolean = false;


  editOpen1(){
  	if(this.isEditableOpen1 === true){
  		this.isEditableOpen1 = false;
  	}else{
  		this.isEditableOpen1 = true;
  	}
  }
  editOpen2(){
  	if(this.isEditableOpen2 === true){
  		this.isEditableOpen2 = false;
  	}else{
  		this.isEditableOpen2 = true;
  	}
  }
  editFav1(){
  	if(this.isEditableFav1 === true){
  		this.isEditableFav1 = false;
  	}else{
  		this.isEditableFav1 = true;
  	}
  }
  editFav2(){
  	if(this.isEditableFav2 === true){
  		this.isEditableFav2 = false;
  	}else{
  		this.isEditableFav2 = true;
  	}
  }
  editSave1(){
  	if(this.isEditableSave1 === true){
  		this.isEditableSave1 = false;
  	}else{
  		this.isEditableSave1 = true;
  	}
  }
  editSave2(){
  	if(this.isEditableSave2 === true){
  		this.isEditableSave2 = false;
  	}else{
  		this.isEditableSave2 = true;
  	}
  }
   actions = [
   {value: '0', viewValue: 'Copy demand'},
   {value: '1', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
	{value: '4', viewValue: 'Modify and submit again'}
  ];
  
    demands = [
	{value: '0', viewValue: 'Copy demand'},
   {value: '1', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
	{value: '4', viewValue: 'Modify and submit again'}
  ];
  actions2 = [
  {value: '0', viewValue: 'Copy demand'},
   {value: '1', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
	{value: '4', viewValue: 'Modify and submit again'}
  ];
  demands2 = [
   {value: '0', viewValue: 'Cancel demand'},
    {value: '2', viewValue: 'Remind WMG SPOC'},
	{value: '3', viewValue: 'Search myself'},
	{value: '4', viewValue: 'Modify and submit again'}
  ];
  actions3 = [
  {value: '0', viewValue: 'Search myself'},
	{value: '1', viewValue: 'Copy demand'},
    {value: '2', viewValue: 'Cancel demand'}
  ];
  demands3 = [
   {value: '0', viewValue: 'Search myself'},
	{value: '1', viewValue: 'Copy demand'},
    {value: '2', viewValue: 'Cancel demand'}
  ];
  onChangeDemand(selecteddemand) {
	  
	   console.log(selecteddemand)
	   if(selecteddemand == "0" || selecteddemand == "4" || selecteddemand == "3"){
		 this.router.navigate(['gotosearchallocate']);
	   }
	   else if(selecteddemand == "1"){
	   this.dialog.open(CancelDemandComponent,{
			  width:'275px'
			  
			});
	   }
	   
}
  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

}
@Component({
 selector: 'cancel-demand',
    template: `<div class="col-xs-12 no_pad employee_details">

	
	<div class="col-xs-12 no_pad allPopHeader popSpace">
	<h1 class="pull-left">
		<span>Delete demand</span>
		 
	</h1>
			<button class="pull-right icon-close" mat-dialog-close aria-label="close" (click)="removeScroll()"></button>
			
		</div>
	<div class="col-xs-12 no_pad">
		<div class="col-xs-12 no_pad popSpace">
		<form class="col-xs-11 no_pad popModuleName" #accordian>
		 
		 Are you sure?
  		</form>
		
  		</div>
  		
		
		<div class="col-xs-12 no_pad">
		<button class="pull-left line-btn popNoBtn" mat-dialog-close aria-label="cancel" (click)="closeDeleteDemand('no')">No</button>
			<button class="pull-left line-btn primary-btn" mat-dialog-close aria-label="ok" (click)="closeDeleteDemand('yes')">Yes</button>
			
		</div>
	</div>
	</div>`
 
})
export class CancelDemandComponent{


}
