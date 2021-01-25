import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {faAngleRight, faAngleLeft, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {ModalService} from '../../services/modal.service';
import {FeedbackComponent as FeedbackComponentType} from '../../modals/feedback/feedback.component';
import {NewsletterComponent as NewsletterComponentType} from '../../modals/newsletter/newsletter.component';
import {OwllyService} from '../../services/owlly.service';

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
  owllyData = <any>[];

  constructor(
    private scully: ScullyRoutesService,
    private modalService: ModalService<FeedbackComponentType | NewsletterComponentType>,
    private owllyService: OwllyService
  ) {}

  ngOnInit(): void {
    this.owlly$ = this.scully.available$.pipe(map((routes: any) => routes.filter((route: any) => route.route.startsWith('/o/'))));

    this.owlly$.subscribe(async (owllys) => {
      for (let owlly of owllys) {
        this.owllyService.owllyBySlug(String(owlly.route).split('/o/')[1]).subscribe((owllyFS) => {
          //console.log(owllyFS);

          owllyFS.data.description = owllyFS.data.description.slice(0, 100);

          this.owllyData.push(owllyFS.data);
        });
      }
    });
  }

  async showNewsletter(): Promise<void> {
    const {NewsletterComponent} = await import('../../modals/newsletter/newsletter.component');

    await this.modalService.open(NewsletterComponent);
  }
  async showFeedback(): Promise<void> {
    const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
  }
}
