import {AfterViewInit, Component, Input} from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-textblock',
  templateUrl: './textblock.component.html',
  styleUrls: ['./textblock.component.scss']
})
export class TextblockComponent {
  @Input() type?: 'owlly' | 'admin' | 'campaigner' | 'citizen';
  @Input() title?: string = '';
  @Input() text?: string = '';
  @Input() showButton?: boolean = false;
  @Input() buttonText?: string = '';
  @Input() subtitle?: string = '';
}
