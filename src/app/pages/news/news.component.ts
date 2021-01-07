import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  blogPosts$: Observable<ScullyRoute[]> | undefined;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });

    this.blogPosts$ = this.scully.available$.pipe(
      map((routes: any) => routes.filter((route: any) => route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md')))
    );
  }
}
