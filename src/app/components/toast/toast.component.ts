import {AfterViewInit, Component, Input} from '@angular/core';

import {ToastOptions, ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements AfterViewInit {
  display = true;

  @Input() options: ToastOptions | undefined;

  constructor(private toastService: ToastService) {}

  async ngAfterViewInit(): Promise<void> {
    await this.close();
  }

  async close(): Promise<void> {
    this.display = false;

    setTimeout(async () => {
      await this.toastService.close();
    }, 4000);
  }
}
