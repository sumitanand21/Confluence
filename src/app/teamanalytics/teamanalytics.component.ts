import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DatacommunicationService } from '../datacommunication.service';

@Component({
  selector: 'app-teamanalytics',
  templateUrl: './teamanalytics.component.html',
  styleUrls: ['./teamanalytics.component.css']
})
export class TeamanalyticsComponent implements OnInit {
FirstProjStatusGraph=true;SecondProjStatusGraph;showMoreGraph=false;
selectedValue:string;selValteamsplit:string;bandGraph=true;onsiteGraph=false;billableGraph=false;
    project = [
    {value: '0', viewValue: 'Yesterday'},
    {value: '1', viewValue: 'Last week'},
	  {value: '2', viewValue: 'Last month'}

  ];
  teamsplit = [
    {value: '0', viewValue: 'Band'},
    {value: '1', viewValue: 'Onsite/Offshore'},
    {value: '2', viewValue: 'Billability and employee status'}

  ];
/******************************************************/
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
 /*******************project stats doghnut chart********************************/
  public doughnutChartLabels1:string[] = ['Present', 'On leave', 'OOD', 'No swipe data', 'On leave'];
  public doughnutChartData1:number[] = [20, 20,20,20,20];
  public doughnutChartType1:string = 'doughnut';

 
public doughnutChartColors1: any[] = 
[

    {
        backgroundColor:[ '#91c300', '#00a2db', '#0093a5', '#fec200', '#f57f7f'],
        borderColor: 'transparent'
    }
]

public onsiteChartLabels:string[] = ['onsite', 'offshore'];
public onsiteChartData:number[] = [30, 70];
public onsiteChartType:string = 'pie';
onsiteChartColors: any[] = [
    {
        backgroundColor:[ '#91c300', '#00a2db'],
        borderColor: 'transparent'
    }
]

public billableChartLabels:string[] = ['Billable', 'non-billable', 'support', 'investment', 'contractors'];
public billableChartData:number[] = [20, 20,20,20,20];
public billableChartType:string = 'doughnut';
public billableChartColors: any[] = [
    {
        backgroundColor:[ '#91c300', '#00a2db', '#0093a5', '#fec200', '#f57f7f'],
        borderColor: 'transparent'
    }
]
 /******************************************************************************/
  constructor(private dataService: DatacommunicationService) { this.selectedValue = '0';this.selValteamsplit='0'}

  ngOnInit() {
  }
  onAnalyticsClick(str) {
    this.dataService.setAnalytics(str);
  }

  public barChartOptions1:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels1:string[] = ['20 Feb', '21 Feb', '22 Feb', '23 Feb', '24 Feb', '25 Feb', 
  '26 Feb', '27 Feb', '28 Feb', '29 Feb', '01 May', '02 May', '03 May', '04 May', '05 May', 
  '06 May', '07 May', '08 May', '09 May', '10 May', '11 May', '12 May', '13 May', 
  '14 May', '15 May'];
  public barChartType1:string = 'bar';
  

  public barChartColors1: any[] = 
[

    {
      backgroundColor:'#FF8601',
       

    }
]
 
  public barChartData1:any[] = [
    {data: [6, 14, 7, 16, 10, 11, 5, 10, 12, 2, 9, 3, 10, 1, 4, 12, 16, 8, 3, 7, 10, 1, 5, 13, 2]}
  ];


  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  onChange(selectedVal) {
    if(selectedVal == '1'){
      this.SecondProjStatusGraph=true;
      this.FirstProjStatusGraph=false;
    }
    else
     {
       this.FirstProjStatusGraph=true;
       this.SecondProjStatusGraph=false;
     }
  }
  showMoreGraphClk(){
    this.showMoreGraph = !this.showMoreGraph;
  }


  onChangeTeamsplit(selValteamsplit){
    if(selValteamsplit == '0'){
      this.bandGraph=true;
      this.onsiteGraph=false;
      this.billableGraph=false;
    }
    else if(selValteamsplit == '1')
     {
       this.onsiteGraph=true;
       this.bandGraph=false;
       this.billableGraph=false;
     }
     else{
        this.billableGraph=true;
        this.onsiteGraph=false;
        this.bandGraph=false;
     }
  }

}
