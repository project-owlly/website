import {AfterViewInit, Component, Input} from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent {

  @Input() text?: string = '';
  @Input() date?: string = '';
  @Input() showButton?: boolean = false;
  @Input() buttonText?: string = '';
  @Input() imgName?: string = '';

  trimString(string: any, length: number) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  }

}
