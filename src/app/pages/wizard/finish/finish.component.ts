import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {Owlly} from '../../../types/owlly';

import {OwllyRoutingService} from '../../../services/owlly-routing.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
})
export class FinishComponent {
  readonly owlly$: Observable<Owlly | undefined> = this.owllyRoutingService.owlly(this.activatedRoute.paramMap).pipe(first());

  constructor(private activatedRoute: ActivatedRoute, private owllyRoutingService: OwllyRoutingService) {}
}
