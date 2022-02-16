import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-sow-view-saved-profile',
  templateUrl: './sow-view-saved-profile.component.html',
  styleUrls: ['./sow-view-saved-profile.component.css']
})
export class SowViewSavedProfileComponent implements OnInit {

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
            accItem[i].className = 'col-xs-12 no_pad accordionItem close_accord';
        }
        if (itemClass == 'col-xs-12 no_pad accordionItem close_accord') {
            //console.log('open');
            this.parentNode.className = 'col-xs-12 no_pad accordionItem open_accord';
        }
    }
  }

}
