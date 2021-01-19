import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import {QuestionComponent as QuestionComponentType} from '../../../modals/question/question.component';
import {NewsletterComponent as NewsletterComponentType} from '../../../modals/newsletter/newsletter.component';
import {InquiryComponent as InquiryComponentType} from '../../../modals/inquiry/inquiry.component';
@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.scss'],
})
export class CitizenComponent implements OnInit {
  constructor(private modalService: ModalService<NewsletterComponentType | QuestionComponentType | InquiryComponentType>) {}

  ngOnInit(): void {}

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }
  async showInquiry(): Promise<void> {
    /*const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
    */
    const {InquiryComponent} = await import('../../../modals/inquiry/inquiry.component');
    await this.modalService.open(InquiryComponent);
  }
}
