import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
allOrders=true;
viewAllOrders=false;

showAllOrders(){
	
this.allOrders=false;
this.viewAllOrders=true;	
}
hideAllOrders(){
	
this.allOrders=true;
this.viewAllOrders=false;	
}
  constructor() { }

  ngOnInit() {
  }

}
