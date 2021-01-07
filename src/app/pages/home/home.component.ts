import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  owlly$: Observable<ScullyRoute[]> | undefined;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.owlly$ = this.scully.available$.pipe(map((routes: any) => routes.filter((route: any) => route.route.startsWith('/o/'))));
  }
}
