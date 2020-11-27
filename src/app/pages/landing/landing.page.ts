import {Component} from '@angular/core';
import {ModalService} from '../../services/modal.service';

import {NewsletterComponent as NewsletterComponentType} from '../../modals/newsletter/newsletter.component';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPageComponent {
  faEnvelope = faEnvelope;

  constructor(private modalService: ModalService<NewsletterComponentType>) {}

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }

  async showFeedback(): Promise<void> {
    // const {FeedbackPage} = await import('../../modals/feedback/feedback.page');
    //
    // const modal = await this.modalCtrl.create({
    //   component: FeedbackPage,
    //   swipeToClose: true,
    //   presentingElement: this.routerOutlet.nativeEl,
    // });
    // await modal.present();
  }
}
