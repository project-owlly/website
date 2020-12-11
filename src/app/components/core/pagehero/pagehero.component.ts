import {AfterViewInit, Component, Input} from '@angular/core';
import { DiamondComponent } from "../diamond/diamond.component";
@Component({
  selector: 'app-pagehero',
  templateUrl: './pagehero.component.html',
  styleUrls: ['./pagehero.component.scss']
})
export class PageheroComponent {

  @Input() title?: string ='';
  @Input() imgName?: string = '';
  @Input() subtitle?: string = '';
  @Input() type?: 'owlly' | 'plain' | 'admin' | 'campaigner' | 'citizen';
  @Input() diamonds?: boolean = false;
  @Input() iconName?: string ='';
}
