import {Component, NgModule, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../components/modal/modal.module';

import {ComponentsModule} from '../../components/core/components.module';

import {QuestionService} from '../../services/question.service';

import {ModalComponent} from '../../components/modal/modal.component';

import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @ViewChild('modalComponent') modal: ModalComponent<QuestionComponent> | undefined;

  questionForm: FormGroup;

  constructor(public fb: FormBuilder, private questionService: QuestionService, private toastService: ToastService) {
    this.questionForm = this.fb.group({
      vorname: [''],
      nachname: [''],
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      question: ['', [Validators.required]],
      publish: [true],
    });
  }

  async createRecord(): Promise<void> {
    const {ToastComponent} = await import('../../components/toast/toast.component');

    try {
      await this.questionService.createQuestionRecord(this.questionForm.value);

      await this.toastService.open(ToastComponent, {
        msg: 'Frage erfolgreich gesendet',
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
  declarations: [QuestionComponent],
})
export class QuestionComponentModule {}