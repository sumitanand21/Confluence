import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-analytics-expanded',
  templateUrl: './analytics-expanded.component.html',
  styleUrls: ['./analytics-expanded.component.css']
})
export class AnalyticsExpandedComponent implements OnInit {
  analytics = 0;
  onVoted(analytics: boolean) {
    console.log(analytics);
  }
  FirstProjStatusGraph = true;
  SecondProjStatusGraph;
  showMoreGraph = false;
  selectedValue: string;
  selValteamsplit: string;
  bandGraph = true;
  onsiteGraph = false;
  billableGraph = false;
  bandGraph2 = true;
  onsiteGraph2 = false;
  billableGraph2 = false;
  project = [
    { value: '0', viewValue: 'Yesterday' },
    { value: '1', viewValue: 'Last week' },
    { value: '2', viewValue: 'Last month' }

  ];
  teamsplit = [
    { value: '0', viewValue: 'Band' },
    { value: '1', viewValue: 'Onsite/Offshore' },
    { value: '2', viewValue: 'Billability and employee status' }

  ];
  teamsplit2 = [
    { value: '0', viewValue: 'Band' },
    { value: '1', viewValue: 'Onsite/Offshore' },
    { value: '2', viewValue: 'Billability and employee status' }

  ];
  /******************************************************/
  public doughnutChartLabels: string[] = ['Allocate budget', 'Actual budget', 'Cost deviation', 'P Sat', 'Planned budget'];
  public doughnutChartData: number[] = [10, 45, 15, 20, 10];
  public doughnutChartType: string = 'doughnut';


  public doughnutChartColors: any[] = [

    {
      backgroundColor: ['#FF6565', '#A966F3', '#0093A5', '#01BEFF', '#A5DB01'],
      borderColor: 'transparent'
    }
  ]
  /*******************project stats doghnut chart********************************/
  public doughnutChartLabels1: string[] = ['Present', 'On leave', 'OOD', 'No swipe data', 'On leave'];
  public doughnutChartData1: number[] = [20, 20, 20, 20, 20];
  public doughnutChartType1: string = 'doughnut';

  public doughnutChartColors1: any[] = [

    {
      backgroundColor: ['#91c300', '#00a2db', '#0093a5', '#fec200', '#f57f7f'],
      borderColor: 'transparent'
    }
  ]


  public onsiteChartLabels: string[] = ['onsite', 'offshore'];
  public onsiteChartData: number[] = [30, 70];
  public onsiteChartType: string = 'pie';
  onsiteChartColors: any[] = [{
    backgroundColor: ['#91c300', '#00a2db'],
    borderColor: 'transparent'
  }]

  public billableChartLabels: string[] = ['Billable', 'non-billable', 'support', 'investment', 'contractors'];
  public billableChartData: number[] = [20, 20, 20, 20, 20];
  public billableChartType: string = 'doughnut';
  public billableChartColors: any[] = [{
    backgroundColor: ['#91c300', '#00a2db', '#0093a5', '#fec200', '#f57f7f'],
    borderColor: 'transparent'
  }]
  /******************************************************************************/
  constructor() { this.selectedValue = '0';
    this.selValteamsplit = '0' }

  ngOnInit() {

  }

  //leave bar chart starts here
  public barChartOptions1: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        barPercentage: 0.4
      }]
    }
  };
  public barChartLabels1: string[] = ['20 Feb', '21 Feb', '22 Feb', '23 Feb', '24 Feb', '25 Feb',
    '26 Feb', '27 Feb', '28 Feb', '29 Feb', '01 May', '02 May', '03 May', '04 May', '05 May',
    '06 May', '07 May', '08 May', '09 May', '10 May', '11 May', '12 May', '13 May',
    '14 May', '15 May'
  ];
  public barChartType1: string = 'bar';


  public barChartColors1: any[] = [

    {
      backgroundColor: '#FF8601',


    }
  ]

  public barChartData1: any[] = [
    { data: [6, 14, 7, 16, 10, 11, 5, 10, 12, 2, 9, 3, 10, 1, 4, 12, 16, 8, 3, 7, 10, 1, 5, 13, 2] }
  ];

  //leave bar chart ends here
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  onChange(selectedVal) {
    if (selectedVal == '1') {
      this.SecondProjStatusGraph = true;
      this.FirstProjStatusGraph = false;
    } else {
      this.FirstProjStatusGraph = true;
      this.SecondProjStatusGraph = false;
    }
  }
  showMoreGraphClk() {
    this.showMoreGraph = !this.showMoreGraph;
  }


  onChangeTeamsplit(selValteamsplit) {
    if (selValteamsplit == '0') {
      this.bandGraph = true;
      this.onsiteGraph = false;
      this.billableGraph = false;
    } else if (selValteamsplit == '1') {
      this.onsiteGraph = true;
      this.bandGraph = false;
      this.billableGraph = false;
    } else {
      this.billableGraph = true;
      this.onsiteGraph = false;
      this.bandGraph = false;
    }
  }
  onChangeTeamsplit2(selValteamsplit) {
    if (selValteamsplit == '0') {
      this.bandGraph2 = true;
      this.onsiteGraph2 = false;
      this.billableGraph2 = false;
    } else if (selValteamsplit == '1') {
      this.onsiteGraph2 = true;
      this.bandGraph2 = false;
      this.billableGraph2 = false;
    } else {
      this.billableGraph2 = true;
      this.onsiteGraph2 = false;
      this.bandGraph2 = false;
    }
  }
  accountComp: boolean = false;
  showAccountComp() {
    this.accountComp = true;
  }
  showVerticalOvw() {
    this.accountComp = false;
  }

  //First bar chart starts here
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    /* barSize: 10, */
    scales: {
      xAxes: [{
        barPercentage: 0.8,
        categorySpacing: 0,
        categoryPercentage: 0.4,
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors: any[] = [

    {
      backgroundColor: ['#FF8601', '#FF8601', '#FF8601', '#FF8601'],


    },
    {
      backgroundColor: ['#9D48EB', '#9D48EB', '#9D48EB', '#9D48EB'],
    }
  ]

  public barChartData: any[] = [
    { data: [6, 14, 7, 16], label: 'TOF' },
    { data: [4.5, 4, 10, 3], label: 'Outside wipro office' }
  ];


  //First bar chart ends here

  //Third bar chart starts here
  public barChartOptions2: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        barPercentage: 0.5,

      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels2: string[] = ['Jan 2017', 'Feb 2017', 'Mar 2017', 'Apr 2017', 'May 2017',
    'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017'
  ];
  public barChartType2: string = 'bar';


  public barChartColors2: any[] = [

    {
      backgroundColor: '#00B3CC',


    }
  ]

  public barChartData2: any[] = [
    { data: [40, 68, 86, 35, 78, 27, 57, 45, 19, 68, 68, 80] }
  ];

  //Third bar chart ends here

  ngAfterViewInit() {
    new Chart(document.getElementById("mixed-chart"), {
      type: 'bar',
      data: {
        labels: ["SCBank", "Sunwest Mortgate", "Shell Corporations", "City Bank", "BHEL"],
        datasets: [{
          label: "Weekly average time",
          type: "line",
          borderColor: "RGB(255,180,0)",
          data: [7.5, 6, 7, 4, 10],
          fill: false
        }, {
          label: "Weekly average time",
          type: "bar",
          backgroundColor: "RGB(88,103,195)",
          data: [13, 10, 11, 5, 14],
        }]
      },
      options: {
        title: {
          display: true,
          //text: 'Population growth (millions): Europe & Africa'
        },
        scales: {
          xAxes: [{
            barPercentage: 0.2,
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: { display: false }
      }
    });

    new Chart(document.getElementById("comparative-analysis"), {
      type: 'bar',
      data: {
        labels: ["Standard Chartered Bank", "Sunwest Mortgate", "Shell Corporations", "City Bank", "BHEL"],
        datasets: [{
          label: "Weekly average time",
          type: "line",
          borderColor: "RGB(255,180,0)",
          data: [7.5, 6, 7, 4, 10],
          fill: false
        }, {
          label: "Weekly average time",
          type: "bar",
          backgroundColor: "RGB(88,103,195)",
          data: [13, 10, 11, 5, 14],
        }]
      },
      options: {
        title: {
          display: true,
          //text: 'Population growth (millions): Europe & Africa'
        },
        scales: {
          xAxes: [{
            barPercentage: 0.2,

          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: { display: false }
      }
    });
  }





}
