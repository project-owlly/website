import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent {

  @Input() type?: string = '';
}
