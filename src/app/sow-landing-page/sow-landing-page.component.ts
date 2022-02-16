import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ISlimScrollOptions } from 'ng2-slimscroll';

@Component({
  selector: 'app-sow-landing-page',
  templateUrl: './sow-landing-page.component.html',
  styleUrls: ['./sow-landing-page.component.css']
})
export class SowLandingPageComponent implements OnInit {
   BeforeSavedSOWContent=true;
  savedSOWContent=false;
 
opts:ISlimScrollOptions;
public selected='Select DM'
name:string;
name1='';
items=[];
showDropDwn=false;
showSavedSOWContent(){
  this.savedSOWContent=true;
  this.BeforeSavedSOWContent=false;
}
bands = [
    {value: 'b1', viewValue: 'B1'},
    {value: 'b2', viewValue: 'B2'},
    {value: 'b3', viewValue: 'B3'}
  ];

  constructor() {
  this.items=[{name:"Sanjeev Chabra"},
        {name:"Sandhya Vijayan"},
        {name:"Vaishnavi Desikan"},
        {name:"Sanjeev Chabra"},
        {name:"Sanjeev Chabra"},
        {name:"Sadhya vijayan"},
        {name:"Sandhya vijayan"},
        {name:"Surya"}
]; }

 myMethod(){
    document.getElementsByTagName("body")[0].classList.add("MobileMenu");
  this.showDropDwn=true;
  }

  edit(i){
  document.getElementsByTagName("body")[0].classList.remove("MobileMenu");
  this.name1=this.items[i].name;
  this.showDropDwn=false;
  }
  closeOverlay(){
	  this.showDropDwn=false;
  document.getElementsByTagName("body")[0].classList.remove("MobileMenu");
  
  }
 
    ngOnInit() {
       this.opts = {
      position: 'right',
      barBackground: '#000000',
  }
  	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
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
            this.parentNode.className = 'col-xs-12 no_pad accordionItem open_accord';
        }
    }
  }

}
