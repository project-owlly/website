import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {combineLatest} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scully: ScullyRoutesService) {}

  $blogPostMetadata = combineLatest([this.activatedRoute.params.pipe(pluck('title')), this.scully.available$]).pipe(
    map(([title, routes]) => routes.find((route) => route.route === `/blog/${title}`))
  );
}
