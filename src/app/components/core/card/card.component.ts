import {AfterViewInit, Component, Input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() type?: 'owlly' | 'admin' | 'campaigner' | 'citizen';
  @Input() title?: string = '';
  @Input() showButton?: boolean = false;
  @Input() buttonText?: string = '';
  @Input() text?: string = '';
  @Input() imgName?: string = '';
  @Input() link?: string = 'javascript:void(0)';
}
