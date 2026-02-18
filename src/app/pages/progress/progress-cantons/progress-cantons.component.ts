import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-progress-cantons',
  templateUrl: './progress-cantons.component.html',
  styleUrls: ['./progress-cantons.component.scss'],
})
export class ProgressCantonsComponent implements OnInit {
  cantonSelect: string | null = '';
  cantonsWithContent = ['bl', 'bs', 'be', 'ge', 'lu', 'ow', 'sh', 'sg', 'so', 'sz', 'zg', 'zh'];

  constructor(private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.cantonSelect = params.get('canton');
    });
  }
}
