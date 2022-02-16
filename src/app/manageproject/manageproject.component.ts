import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ISlimScrollOptions } from 'ng2-slimscroll';


@Component({
  selector: 'app-manageproject',
  templateUrl: './manageproject.component.html',
  styleUrls: ['./manageproject.component.css']
})
export class ManageprojectComponent implements OnInit {
	selectedValue: string;

   projects = [
    {value: '0', viewValue: 'Edit project'},
    {value: '1', viewValue: 'Contractors allowed?'},
    {value: '2', viewValue: 'Edit customer SPOC'},
    {value: '3', viewValue: 'Add holmes metrics data'},
    {value: '4', viewValue: 'Tenure Rotation'}
  ];
  actionSelected(data){
    if(data === '4'){
      // this.router.navigate(['tenure']);
    }
  }
  
  public doughnutChartLabels:string[] = ['Allocate budget', 'Actual budget', 'Cost deviation', 'PSAT', 'Planned budget'];
  public doughnutChartData:number[] = [10, 45,15,20,10];
  public doughnutChartType:string = 'doughnut';
 
public doughnutChartColors: any[] = 
[

    {
        backgroundColor:[ '#FF6565', '#A966F3', '#0093A5', '#01BEFF', '#A5DB01'],
        borderColor: 'transparent'
    }
]


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(public dialog: MatDialog) { }
    openDialog() {
    this.dialog.open(BulkAllocationComponent,{
      width:'1000px'
    });
    document.getElementsByTagName('body')[0].classList.add("active");
  }
  @Output() viewMorePage: EventEmitter<any> = new EventEmitter();
  viewMore() {
    this.viewMorePage.emit('analytics');
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-bulkAllocation',
  templateUrl: './bulkAllocationDialog.html'
})
export class BulkAllocationComponent  implements OnInit {
  opts:ISlimScrollOptions;
    removeScroll(){
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
   ngOnInit() {
     this.opts = {
      position: 'right',
      barBackground: '#FFF',
      }
   }

}