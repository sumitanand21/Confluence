import { Component, OnInit, EventEmitter, Inject, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import Chart from 'chart.js';
import { ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Http} from '@angular/http';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-projectview',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.css']
})
export class ProjectviewComponent implements OnInit {
//Doughnut chart starts here

  public doughnutChartLabels:string[] = ['Allocate budget', 'Actual budget', 'Cost deviation', 'P Sat', 'Planned budget'];
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



//Doghnut chart ends here

  constructor(private myElement: ElementRef, public dialog: MatDialog) { }

  @Output() viewMorePageSend: EventEmitter<any> = new EventEmitter();
  getViewMore(getName) {
     this.viewMorePageSend.emit(getName);
  }
  ngOnInit() {
  	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
	/* var objDiv  = document.getElementById("accordianScroll1"); */
	/* let el = this.myElement.nativeElement.querySelector('.accord2'); */
	let accOpen = document.querySelector(".accordionItem");
	
  
	  let i;
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
		
    }
    function toggleItem() {

        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            //console.log('close');
            accItem[i].className = 'col-xs-12 no_pad accordionItem close_accord';
			
			 
	
        }
        if (itemClass == 'col-xs-12 no_pad accordionItem close_accord') {
            //console.log('open');
			 /* el.scrollIntoView({behavior: "smooth"}); */
            this.parentNode.className = 'col-xs-12 no_pad accordionItem open_accord';
			 accOpen.scrollIntoView(true);
			  window.scrollBy(0, -50);
			
			
				
	
        }
    }
  }

 openManageProject(){
    //var element = document.querySelector("#"+id);
    var element = document.getElementById("createIndent");
   // var accrID = document.getElementsByClassName('createIndent_accor');
    //console.log(accrID);
    element.scrollIntoView();


    document.getElementById('createAccor').classList.add('open_accord');
    document.getElementById('createAccor').classList.remove('close_accord');
	document.getElementById('createAccor').scrollIntoView(true);
    window.scrollBy(0, -60);
  }
  headerName:any;
  openDeleteDialog(accordian) {
	 this.headerName = accordian.querySelector('.pull-left.desc_hd.first_letter').innerHTML;
	console.log(this.headerName);
     const ref = this.dialog.open(DeleteAccordianComponent,{
      width:'400px',
	   data: { headerTitle: this.headerName }
	  
    });
	 document.getElementsByTagName('body')[0].classList.add("active");  
	const sub = ref.componentInstance.onYes.subscribe((data) => {
       /*  alert(data); */
		if(data=="yes"){
			 accordian.remove();
		}
      });
	 
  }
 

}
@Component({
 selector: 'delete-accordian',
    template: `<div class="col-xs-12 no_pad employee_details">

	
	<div class="col-xs-12 no_pad allPopHeader">
	<h1 class="pull-left">
		<span>Remove</span>
		 <span >{{ data.headerTitle }}</span>
	</h1>
			<button class="pull-right icon-close" mat-dialog-close aria-label="close" (click)="removeScroll()"></button>
			
		</div>
	<div class="col-xs-12 no_pad popInnerPadd">
		<div class="col-xs-12 no_pad">
		<form class="col-xs-11 no_pad popModuleName" #accordian>
		 
		 Are you sure you want to remove {{ data.headerTitle }} ?
  		</form>
		
  		</div>
  		
		
		<div class="col-xs-12 no_pad mt20">
			<button class="pull-right line-btn primary-btn" mat-dialog-close aria-label="ok" (click)="closeDeleteAcc('yes')">Yes</button>
			<button class="pull-right line-btn" mat-dialog-close aria-label="cancel" (click)="closeDeleteAcc('no')">No</button>
		</div>
	</div>
	</div>`
 
})
export class DeleteAccordianComponent{
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
