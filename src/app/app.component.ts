import { Component, Output } from '@angular/core';
import { Routes, RouterModule, NavigationEnd, Router, } from '@angular/router';
import { DatacommunicationService } from './datacommunication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dataService: DatacommunicationService, private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  onAnalyticsClick(str) {
    this.dataService.setAnalytics(str);
  }

}
