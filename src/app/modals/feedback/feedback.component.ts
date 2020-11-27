import {Component, NgModule, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';

import {ComponentsModule} from '../../components/core/components.module';

import {NewsletterService} from '../../services/newsletter.service';

import {ModalComponent} from '../../components/modal/modal.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  @ViewChild('modalComponent') modal: ModalComponent<FeedbackComponent> | undefined;

  feedbackForm: FormGroup;

  constructor(public fb: FormBuilder, private newsletterService: NewsletterService) {
    this.feedbackForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      feedback: [''],
    });
  }

  async createRecord(): Promise<void> {
    try {
      await this.newsletterService.createFeedbackRecord(this.feedbackForm.value);

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
  declarations: [FeedbackComponent],
})
export class FeedbackComponentModule {}
