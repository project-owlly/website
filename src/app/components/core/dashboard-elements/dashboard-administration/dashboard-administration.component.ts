import { Component, OnInit } from '@angular/core';
import {faUserCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss']
})
export class DashboardAdministrationComponent implements OnInit {

  faUserCircle = faUserCircle;

  faTimesCircle=faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(-100%)';
  }
}
