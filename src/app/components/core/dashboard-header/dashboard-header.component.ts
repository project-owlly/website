import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

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
