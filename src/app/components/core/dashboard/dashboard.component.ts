import { Component, OnInit,Input } from '@angular/core';

import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faUserCircle=faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(100%)';
  }
}
