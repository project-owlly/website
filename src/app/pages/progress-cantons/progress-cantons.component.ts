import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-progress-cantons',
  templateUrl: './progress-cantons.component.html',
  styleUrls: ['./progress-cantons.component.scss']
})
export class ProgressCantonsComponent implements OnInit {

  cantonSelect: string | null = '';

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.cantonSelect = params.get('canton'); 
  });
  }

  data = {sh: {text: "hallo", title: "gugus"},
          zh: {text: "hallo", title: "gugus"}

          }


}
