import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {isScullyRunning} from '@scullyio/ng-lib';

import {Owlly} from '../../types/owlly';

import {OwllyRoutingService} from '../../services/owlly-routing.service';

@Component({
  selector: 'app-owlly',
  templateUrl: './owlly.component.html',
  styleUrls: ['./owlly.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class OwllyComponent {
  owlly$ = this.initOwlly().pipe(first());

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private owllyRoutingService: OwllyRoutingService) {}

  private initOwlly(): Observable<Owlly | undefined> {
    // FIXME: currently Scully is not able to query Firestore somehow
    return isScullyRunning()
      ? this.owllyRoutingService.getOwllyBySlugForScully(this.activatedRoute.paramMap)
      : this.owllyRoutingService.owllyBySlug(this.activatedRoute.paramMap);
  }
}
