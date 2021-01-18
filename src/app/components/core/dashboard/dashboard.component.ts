import {Component, OnInit, Input} from '@angular/core';

import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faUserCircle = faUserCircle;

  constructor() {}

  ngOnInit(): void {
    /*
    const Chart = require('chart.js');
    var ctx = document.getElementById('signatures')!;
    var myChart = new Chart(ctx, {
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
  });*/
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(100%)';
  }
}
