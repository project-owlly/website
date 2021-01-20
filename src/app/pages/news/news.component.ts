import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  blogPosts$: Observable<ScullyRoute[]> | undefined;

  constructor(private scully: ScullyRoutesService) {}

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
