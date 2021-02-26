import {Component, OnInit} from '@angular/core';
import {NewsletterService} from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent implements OnInit {
  subscriberList: any[] = [];
  constructor(private newsletter: NewsletterService) {}

  async ngOnInit() {
    let newsletter = await this.newsletter.getNewsletterSubscriptions().get();
    newsletter.subscribe((data) => {
      data.forEach((element) => {
        this.subscriberList.push(element.data());
      });
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
