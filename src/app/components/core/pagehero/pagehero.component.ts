import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagehero',
  templateUrl: './pagehero.component.html',
  styleUrls: ['./pagehero.component.scss']
})
export class PageheroComponent {

  @Input() titleLight?: string = '';
  @Input() titleHeavy?: string ='';
  @Input() breakTitle?: boolean = true;
  @Input() imgName?: string = '';
  @Input() subtitle?: string = '';
  @Input() type?: 'owlly' | 'plain';
}
