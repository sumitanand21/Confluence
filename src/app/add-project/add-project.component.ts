import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
newProjects=true;

onClickHere(){
	this.newProjects=false;

}
  constructor() { }

  ngOnInit() {
  	
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
            accItem[i].className = 'accordionItem close_accord';
        }
        if (itemClass == 'accordionItem close_accord') {
            //console.log('open');
            this.parentNode.className = 'accordionItem open_accord';
        }
    }
  }

}
