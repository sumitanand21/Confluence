import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import {MatDialog} from '@angular/material';
import { DatacommunicationService } from '../datacommunication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
	opts:ISlimScrollOptions;settingsWindow=true;
  showOverlay=false;
  arrayOftime : any;
  projects = [
    {value: '0', viewValue: 'select'},
    {value: '1', viewValue: 'select1'},
    {value: '2', viewValue: 'select2'}
  ];
  
  duedays:boolean;
  mytasks:boolean;
  duedays1:boolean;
  mytasks1:boolean;
  constructor(public dc:DatacommunicationService) { 
    this.arrayOftime = ['Yesterday', 'Last Week', 'Last Month'];
  }

  ngOnInit() {
  	 this.opts = {
      position: 'right',
      barBackground: '#000000',
  }
  }
  showSettings(){

	this.showOverlay=!this.showOverlay;
	this.settingsWindow=!this.settingsWindow;
	
	}
	overlayClick(){
		
		this.showOverlay=false;
		this.settingsWindow=!this.settingsWindow;
		
  }
  checkrequest(myrequeststatus)
  {
    debugger;
  }

  
  displayduedays(radioval)
  {
    if(radioval == "3")
    {
    this.duedays = true;
    this.mytasks = false;
    }
    else if(radioval == "2")
    {
      this.mytasks = true;
      this.duedays = false;
    }
    else{
      this.duedays = false;
      this.mytasks = false;
    }
  }
  displayduedays1(radioval1)
  {
    debugger;
    if(radioval1 == "13")
    {
    this.duedays1 = true;
    this.mytasks1 = false;
    }
    else if(radioval1 == "12")
    {
      this.mytasks1 = true;
      this.duedays1 = false;
    }
    else{
      this.duedays1 = false;
      this.mytasks1 = false;
    }
  }

  
 
	
}
