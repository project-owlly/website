import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPageComponent {
  async showNewsletter(): Promise<void> {
    // const {NewsletterPage} = await import('../../modals/newsletter/newsletter.page');
    //
    // const modal = await this.modalCtrl.create({
    //   component: NewsletterPage,
    //   swipeToClose: true,
    //   presentingElement: this.routerOutlet.nativeEl,
    // });
    // await modal.present();
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
