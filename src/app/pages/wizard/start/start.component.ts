import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {Owlly} from '../../../types/owlly';

import {OwllyRoutingService} from '../../../services/owlly-routing.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  readonly owlly$: Observable<Owlly | undefined> = this.owllyRoutingService.owlly(this.activatedRoute.paramMap).pipe(first());

  constructor(private activatedRoute: ActivatedRoute, private owllyRoutingService: OwllyRoutingService) {}
}
