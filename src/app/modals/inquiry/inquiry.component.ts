import {Component, NgModule, ViewChild, Input} from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';

import {ComponentsModule} from '../../components/core/components.module';

import {InquiryService} from '../../services/inquiry.service';

import {ModalComponent} from '../../components/modal/modal.component';

import {ToastService} from '../../services/toast.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent {
  @ViewChild('modalComponent') modal: ModalComponent<InquiryComponent> | undefined;

  inquiryForm: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder, private inquiryService: InquiryService, private toastService: ToastService, private router: Router) {
    this.inquiryForm = this.fb.group({
      vorname: [''],
      nachname: [''],
      funktion: [''],
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      inquiry: ['', [Validators.required]],
      source: [this.router.url],
    });
  }

  async createRecord(): Promise<void> {
    const {ToastComponent} = await import('../../components/toast/toast.component');

    try {
      await this.inquiryService.createQuestionRecord(this.inquiryForm.value);

      await this.toastService.open(ToastComponent, {
        msg: 'Frage erfolgreich gesendet',
        status: 'success',
        position: 'bottom',
      });

      await this.close();
    } catch (err: any) {
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
  declarations: [InquiryComponent],
})
export class QuestionComponentModule {}
