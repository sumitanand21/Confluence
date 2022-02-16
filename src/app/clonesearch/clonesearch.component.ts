import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-clonesearch',
  templateUrl: './clonesearch.component.html',
  styleUrls: ['./clonesearch.component.css']
})
export class ClonesearchComponent implements OnInit {

  
    resources = [
      {value: '0', viewValue: 'Allocate'},
      {value: '1', viewValue: 'Reserve'},
    {value: '2', viewValue: 'Reject'},
    ];
    toggleTrue=false;
    showDemandSelect:boolean = false;
    demands: any;
    selectedAll: any;
    checkboxcounter:number = 0;
    showSubmit=false;
    check: any;
    names: any;
    extra: any;
    selectedCount:any=[];
    initialCheckedCount:any = 1;
    searchResult=false;show;
    showSelectDrop=false;showOverlay=false;
   constructor(public dialog: MatDialog, public dialogEmp: MatDialog,
   public dialogCostDeviation: MatDialog, public dialogtransBudget: MatDialog,
   public dialogBillable:MatDialog,public dialogSubmit: MatDialog,public dialogaskforhelp:MatDialog) { 

    this.check=[
    {
        "checkbox":"Allocate",
        
      },
      {
        "checkbox":"Notify",
       
      },
      {
        "checkbox":"Request unblock",
        
      },
      {
        "checkbox":"Save profile",
        
      },
       {
        "checkbox":"Reserve",
        
      },
      // {
      //   "checkbox":"Invest",
        
      // },
      // {
      //   "checkbox":"Allocate as Consultant",
        
      // },
    ]
    
  
   this.names = [
    {
         selected: false,
             
              "profilename": "Prakash Kumar",
        "number":"9945782345",
        "exp": "Experience",
        "expyears": "5-10 years",
        "skill": "Skills",
        "skilltype": "React js",
        "loc": "Location",
        "place": "Mumbai",
        "expType": "Role",
        "currentRole": "Developer",
          },
       {
        selected: false,
        "profilename": "Dinesh Kumar",
        "number":"9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "Skills",
        "skilltype": "Angular js",
        "loc": "Location",
        "place": "Bangalore",
        "expType": "Role",
        "currentRole": "Developer",
          },
        {
        selected: false,
              "profilename": "Anu Kumar",
        "number":"9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "Skills",
        "skilltype": "Angular js",
        "loc": "Location",
        "place": "Delhi",
        "expType": "Role",
        "currentRole": "Test engineer",
        
          },
          {
        selected: false,
              "profilename": "Kumar Sharma",
        "number":"9945782345",
        "exp": "Experience",
        "expyears": "3-5 years",
        "skill": "Skills",
        "skilltype": "Angular js",
        "loc": "Location",
        "place": "Bangalore",
        "expType": "Role",
        "currentRole": "Developer",
        
          },
        
       
        
      ]
   }

     overlayClick(){
      document.getElementsByClassName("mainContent")[0].classList.remove("downArrwClass");
      var b = document.getElementsByClassName("democlass");
      b[0].classList.add("display_none");
       b[0].classList.remove("democlass");
      this.showOverlay=false;
      
    }

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
  
    openDialogEmp() {
      this.dialogEmp.open(CloneSearchEmployeeDetailstComponent,{
        width:'1000px'
      });
    document.getElementsByTagName('body')[0].classList.add("active");
    }

    onBlurMethod() {
      this.dialogBillable.open(CloneSearchBillabilityPopupComponent,{
        width:'400px'
      });
      
    document.getElementsByTagName('body')[0].classList.add("active");
    }
    submitContentModal() {
      this.dialogSubmit.open(CloneSearchSubmitComponent,{
        width:'400px'
      });
      document.getElementsByTagName('body')[0].classList.add("active");
    }
  }
    @Component({
      selector: 'app-billability-modal-page',
      templateUrl: './clonesearchbillabilitypopup.html',
     
    })
    export class CloneSearchBillabilityPopupComponent{
    BillabilityClose(){
      document.getElementsByTagName('body')[0].classList.remove("active");
    }
    }
  @Component({
    selector: 'app-clone-submit-modal-page',
    templateUrl: './clonesearchsubmit.html',
   
  })
  export class CloneSearchSubmitComponent{
  submitClose(){
    document.getElementsByTagName('body')[0].classList.remove("active");
  }
  }
 
  @Component({
    selector: 'app-clone-SearchemployeeDetails-page',
    templateUrl: './clonesearchemployeedetails.html',
   
  })
  export class  CloneSearchEmployeeDetailstComponent{
  removeScrollSearch(){
      document.getElementsByTagName('body')[0].classList.remove("active");
    }
  }
  