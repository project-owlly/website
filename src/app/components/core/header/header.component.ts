import {Component, Input} from '@angular/core';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {faAlignRight, faBars, faTimesCircle, faPlayCircle, faCubes, faUsers} from '@fortawesome/free-solid-svg-icons';
import {NewsletterComponent as NewsletterComponentType} from '../../../modals/newsletter/newsletter.component';
import {ModalService} from '../../../services/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() hideNav?: boolean = false;

  faAlignRight = faAlignRight;
  faBars = faBars;
  faTimesCircle = faTimesCircle;
  faUsers = faUsers;
  faCubes = faCubes;
  faPlayCircle = faPlayCircle;

  constructor(private modalService: ModalService<NewsletterComponentType>) {}
  readonly theme$: Observable<'dark' | 'light'> = of(window.matchMedia('(prefers-color-scheme: dark)')).pipe(
    map((media: MediaQueryList) => (media.matches ? 'dark' : 'light'))
  );

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(100%)';
  }
}
