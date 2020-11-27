import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'submit' | 'button' = 'submit';

  @Input() small = false;

  @Input() uppercase = true;

  @Input() disable = false;
}
