import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  readonly theme$: Observable<'dark' | 'light'> = of(window.matchMedia('(prefers-color-scheme: dark)')).pipe(
    map((media: MediaQueryList) => (media.matches ? 'dark' : 'light'))
  );
}
