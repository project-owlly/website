import {Component} from '@angular/core';
import {ModalService} from '../../services/modal.service';

import {NewsletterComponent as NewsletterComponentType} from '../../modals/newsletter/newsletter.component';
import {FeedbackComponent as FeedbackComponentType} from '../../modals/feedback/feedback.component';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPageComponent {
  faEnvelope = faEnvelope;

  constructor(private modalService: ModalService<NewsletterComponentType | FeedbackComponentType>) {}

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }

  async showFeedback(): Promise<void> {
    const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
  }
}
