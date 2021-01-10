import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {faAngleRight, faAngleLeft, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {ModalService} from '../../services/modal.service';
import {FeedbackComponent as FeedbackComponentType} from '../../modals/feedback/feedback.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faEnvelope = faEnvelope;
  owlly$: Observable<ScullyRoute[]> | undefined;

  constructor(private scully: ScullyRoutesService, private modalService: ModalService<FeedbackComponentType>) {}

  ngOnInit(): void {
    this.owlly$ = this.scully.available$.pipe(map((routes: any) => routes.filter((route: any) => route.route.startsWith('/o/'))));
  }

  async showFeedback(): Promise<void> {
    const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
  }
}
