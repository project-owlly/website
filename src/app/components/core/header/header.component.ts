import {Component} from '@angular/core';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import { faAlignRight, faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  faAlignRight=faAlignRight;
  faBars=faBars;
  faTimesCircle=faTimesCircle;

  readonly theme$: Observable<'dark' | 'light'> = of(window.matchMedia('(prefers-color-scheme: dark)')).pipe(
    map((media: MediaQueryList) => (media.matches ? 'dark' : 'light'))
  );

  openMobileNav() {
    document.getElementById("mobileNav")!.style.transform = "translateX(0%)";
  }
  closeMobileNav() {
    document.getElementById("mobileNav")!.style.transform = "translateX(100%)";
  }
}
