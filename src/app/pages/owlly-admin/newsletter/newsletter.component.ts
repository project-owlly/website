import {Component, OnInit} from '@angular/core';
import {NewsletterService} from 'src/app/services/newsletter.service';
import {getDocs} from 'firebase/firestore';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent implements OnInit {
  subscriberList: any[] = [];
  constructor(private newsletter: NewsletterService) {}

  async ngOnInit() {
    let newsletterSnapshot = await this.newsletter.getNewsletterSubscriptions();
    let docs = await getDocs(newsletterSnapshot);
    docs.forEach((doc: any) => {
      this.subscriberList.push(doc.data());
    });
  }

  send() {
    this.newsletter.sendNewsletter(
      this.subscriberList.filter((a) => {
        return a.isChecked === true;
      })
    );
  }

  deselect() {
    for (let item of this.subscriberList) {
      item.isChecked = false;
    }
  }
  select() {
    for (let item of this.subscriberList) {
      item.isChecked = true;
    }
  }
}
