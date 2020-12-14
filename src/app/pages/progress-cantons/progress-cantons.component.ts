import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-cantons',
  templateUrl: './progress-cantons.component.html',
  styleUrls: ['./progress-cantons.component.scss']
})
export class ProgressCantonsComponent implements OnInit {

  cantonSelect: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {canton: 'sh', text:"das ist Schaffhausen"},
    {canton: 'zh', text:"das ist Zürich"},
  ]


}
