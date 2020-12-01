import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagehero',
  templateUrl: './pagehero.component.html',
  styleUrls: ['./pagehero.component.scss']
})
export class PageheroComponent {

  @Input() title?: string = '';
  @Input() imgName?: string = '';

}
