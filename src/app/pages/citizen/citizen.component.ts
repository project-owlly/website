import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';

import {NewsletterComponent as NewsletterComponentType} from '../../modals/newsletter/newsletter.component';
@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.scss'],
})
export class CitizenComponent implements OnInit {
  constructor(private modalService: ModalService<NewsletterComponentType>) {}

  ngOnInit(): void {}

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }
}
