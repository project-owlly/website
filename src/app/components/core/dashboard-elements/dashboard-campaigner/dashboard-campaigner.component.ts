import {Component, OnInit, Input} from '@angular/core';

import {faUserCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard-campaigner',
  templateUrl: './dashboard-campaigner.component.html',
  styleUrls: ['./dashboard-campaigner.component.scss'],
})
export class DashboardCampaignerComponent implements OnInit {
  faUserCircle = faUserCircle;

  faTimesCircle=faTimesCircle;
  canvas: any;
  ctx: any;


  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('signatures');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data:{
        labels: [1,2,3,4,5,6],
        datasets: [{
          data: [10,20,14,57,76,87],
          label: 'Renteninitiative',
          borderColor: '#00a6d4',
          backgroundColor: '#00a6d4',
          fill: false,
        },
        {
          data: [5,13,69,65,30,44],
          label: 'Velo-Initiative',
          borderColor: '#81bc4f',
          backgroundColor: '#81bc4f',
          fill: false,
        },
      ]
      },
      options: {
        tooltips: {enabled: false}
      }
  });
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(-100%)';
  }
}
