import {Component, NgModule, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';

import {ComponentsModule} from '../../components/core/components.module';

import {NewsletterService} from '../../services/newsletter.service';

import {ModalComponent} from '../../components/modal/modal.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  @ViewChild('modalComponent') modal: ModalComponent<NewsletterComponent> | undefined;

  newsletterForm: FormGroup;

  constructor(public fb: FormBuilder, private newsletterService: NewsletterService) {
    this.newsletterForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      funnel: [''],
      testuser: [true],
    });
  }

  async createRecord(): Promise<void> {
    try {
      await this.newsletterService.createNewsletterRecord(this.newsletterForm.value);

      // TODO toast

      await this.close();
    } catch (err) {
      // TODO toast
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
export class NewsletterPageModule {}
