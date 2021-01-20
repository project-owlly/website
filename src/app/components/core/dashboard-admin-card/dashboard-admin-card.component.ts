import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin-card',
  templateUrl: './dashboard-admin-card.component.html',
  styleUrls: ['./dashboard-admin-card.component.scss']
})
export class DashboardAdminCardComponent implements OnInit {

  @Input() new?:boolean = false;
  @Input() name?:string = '';
  @Input() link?:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
