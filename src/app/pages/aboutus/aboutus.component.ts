import {Component, OnInit} from '@angular/core';

import {faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
})
export class AboutusComponent implements OnInit {
  faLink = faLink;

  constructor() {}

  ngOnInit(): void {}
}
