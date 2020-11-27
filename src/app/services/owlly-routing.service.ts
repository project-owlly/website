import {Injectable} from '@angular/core';
import {ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

import {Owlly} from '../types/owlly';

import {OwllyService} from './owlly.service';

@Injectable({
  providedIn: 'root',
})
export class OwllyRoutingService {
  constructor(private owllyService: OwllyService) {}

  owlly(paramMap: Observable<ParamMap>): Observable<Owlly | undefined> {
    return paramMap.pipe(
      first(),
      map((snapshop: ParamMap) => snapshop.get('owllyId')),
      filter((owllyId: string | null) => owllyId !== null && owllyId !== ''),
      switchMap((owllyId: string | null) => this.owllyService.owlly(owllyId as string)),
      first(),
      shareReplay({bufferSize: 1, refCount: true})
    );
  }
}
