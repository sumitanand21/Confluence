import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {MatDialog} from '@angular/material'; 

@Component({
  selector: 'app-proceed-to-allocate',
  templateUrl: './proceed-to-allocate.component.html',
  styleUrls: ['./proceed-to-allocate.component.css']
})
export class ProceedToAllocateComponent implements OnInit {
	
	 bsConfig: Partial<BsDatepickerConfig>;

  constructor(private location:Location, public dialogCost: MatDialog, public dialogTransfer: MatDialog,
  public dialogEmp : MatDialog) { }
   ShowAllocationPeriodContent=false;
  StaggerAllocationButton(){
  this.ShowAllocationPeriodContent=!this.ShowAllocationPeriodContent;
}

   toggleTrue=false;
   changeEvent(ev) {
    if (ev.checked="false") {
     this.toggleTrue=!this.toggleTrue;
}
else if(ev.checked="true"){
  this.toggleTrue=false;
}
  }
  ngOnInit() {
  }
  goBack(){
	  this.location.back();
  }
  
 openDialogCostMyTeam() {
    this.dialogCost.open(CostDeviationMTDComponent,{
      width:'800px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
 } 
openDialogTransferMyTeam() {
    this.dialogTransfer.open(TransferBudgetMTComponent,{
      width:'650px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  }

 openDialogEmpDetails() {
    this.dialogEmp.open(MyTeamEmpDetailsComponent,{
      width:'1000px'
    });
	document.getElementsByTagName('body')[0].classList.add("active");
  } 
  
  
}
@Component({
  selector: 'app-costDeviationMT-page',
  templateUrl: './costDeviationMyTeam.html',
 
})
export class CostDeviationMTDComponent{
removeScrollCost(){
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-transferBudgetMT-page',
  templateUrl: './transferBudgetMyTeam.html',
 
})
export class TransferBudgetMTComponent{
removeScrollTransfer(){
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
@Component({
  selector: 'app-myteamEmpDetails-page',
  templateUrl: './myTeamemployeeDetails.html',
 
})
export class MyTeamEmpDetailsComponent{
removeScrollEmp(){
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
}
