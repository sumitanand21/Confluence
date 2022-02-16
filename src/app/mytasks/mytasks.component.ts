import { Component, OnInit, ViewChild,EventEmitter,Inject } from '@angular/core';
import { ContextMenuService,ContextMenuComponent } from 'angular2-contextmenu';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {

  selectNotify;  showHideTime:boolean; selectNotifyTwo;
  constructor(private contextMenuService: ContextMenuService, public dialog: MatDialog, private myElement: ElementRef,) {}

  ngOnInit() {
  }

@ViewChild('notify_one') public notify_one: ContextMenuComponent;
 @ViewChild('notify_two') public notify_two: ContextMenuComponent;
  
 
 selectTime(data){
    this.selectNotify=data;
 }
 selectTimeTwo(data){
    this.selectNotifyTwo=data;
 }
 showTimepicker(){
  console.log('Hello rupali')
    this.showHideTime = !this.showHideTime;
 } 
 hideOverlyTime(){
    this.showHideTime = false;
 }

 notificationDelete(data){
  console.log(data);
     data.remove();
 }
   headerName:any;
  openDeleteDialogBox(/*Add variable for selecting what to delete. Add the same in html as well*/) {
  
   const ref = this.dialog.open(DeleteDialogComponent,{
      width:'400px',    
    
    });
   document.getElementsByTagName('body')[0].classList.add("active");  
   const sub = ref.componentInstance.onYes.subscribe((data) => {
    if(data=="yes"){
      //Write logic for on yes of delete
    }
      });
   
  }
}
@Component({
 selector: 'delete-conf',
    template: `<div class="col-xs-12 no_pad employee_details">

  
  <div class="col-xs-12 no_pad allPopHeader">
  <h1 class="pull-left">
    <span>Delete</span>
  </h1>
      <button class="pull-right icon-close" mat-dialog-close aria-label="close" (click)="removeScroll()"></button>
      
    </div>
  <div class="col-xs-12 no_pad popInnerPadd">
    <div class="col-xs-12 no_pad">
    <form class="col-xs-11 no_pad popModuleName" #accordian>
     
     Are you sure?
      </form>
    
      </div>
      
    
    <div class="col-xs-12 no_pad mt20">
      <button class="pull-right line-btn primary-btn" mat-dialog-close aria-label="ok" (click)="closeDeleteAcc('yes')">Yes</button>
      <button class="pull-right line-btn" mat-dialog-close aria-label="cancel" (click)="closeDeleteAcc('no')">No</button>
    </div>
  </div>
  </div>`
 
})
export class DeleteDialogComponent{
  removeScroll(){
document.getElementsByTagName('body')[0].classList.remove("active");
}
 onYes = new EventEmitter();
  closeDeleteAcc(confirmation) {
    this.onYes.emit(confirmation);
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
