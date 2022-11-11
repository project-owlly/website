import {Component, NgModule, ViewChild} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';

import {ComponentsModule} from '../../components/core/components.module';

import {NewsletterService} from '../../services/newsletter.service';

import {ModalComponent} from '../../components/modal/modal.component';

import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  @ViewChild('modalComponent') modal: ModalComponent<NewsletterComponent> | undefined;

  newsletterForm: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder, private newsletterService: NewsletterService, private toastService: ToastService) {
    this.newsletterForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      funnel: [''],
      testuser: [true],
    });
  }

  async createRecord(): Promise<void> {
    const {ToastComponent} = await import('../../components/toast/toast.component');

    try {
      await this.newsletterService.createNewsletterRecord(this.newsletterForm.value);

      await this.toastService.open(ToastComponent, {
        msg: 'E-Mail-Adresse erfolgreich erfasst.',
        status: 'success',
        position: 'bottom',
      });

      await this.close();
    } catch (err) {
      await this.toastService.open(ToastComponent, {
        msg: 'Fehler: ' + err.text,
        status: 'error',
        position: 'bottom',
      });

      console.error(err);
    }
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule, ComponentsModule],
  declarations: [NewsletterComponent],
})
export class NewsletterComponentModule {}
