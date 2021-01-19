import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() type?: 'owlly' | 'admin' | 'campaigner' | 'citizen';
  @Input() title?: string =  '';

  constructor() { }

  ngOnInit(): void {
  }

}