import {Component, Input, ViewChild, ElementRef} from '@angular/core';

import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  blogPosts$: Observable<ScullyRoute[]> | undefined;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  @ViewChild('horizontalScroll') horizontalScroll!: ElementRef;
  constructor(private scully: ScullyRoutesService) {}

  scrollRight() {
    this.horizontalScroll.nativeElement.scrollLeft += 400;
  }
  scrollLeft() {
    this.horizontalScroll.nativeElement.scrollLeft -= 400;
  }

  ngOnInit() {
    this.blogPosts$ = this.scully.available$.pipe(
      map((routes: any[]) => {
        return routes
          .filter((route: any) => route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md'))
          .sort((a, b) => {
            console.log(JSON.stringify(a));
            return b.sort - a.sort;
          });
      }) //map
    );
  }
}
