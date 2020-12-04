import {Injectable} from '@angular/core';
import {ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {forkJoin, Observable} from 'rxjs';
import {filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

import {Owlly} from '../types/owlly';

import {OwllyService} from './owlly.service';

@Injectable({
  providedIn: 'root',
})
export class OwllyRoutingService {
  constructor(private httpClient: HttpClient, private owllyService: OwllyService) {}

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

  owllyBySlug(paramMap: Observable<ParamMap>): Observable<Owlly | undefined> {
    return paramMap.pipe(
      first(),
      map((snapshop: ParamMap) => snapshop.get('slug')),
      filter((slug: string | null) => slug !== null && slug !== ''),
      switchMap((slug: string | null) => this.owllyService.owllyBySlug(slug as string)),
      first()
    );
  }

  getOwllyBySlugForScully(paramMap: Observable<ParamMap>): Observable<Owlly | undefined> {
    return forkJoin([
      paramMap.pipe(
        first(),
        map((snapshop: ParamMap) => snapshop.get('slug')),
        filter((slug: string | null) => slug !== null && slug !== '')
      ),
      this.httpClient.get<Owlly[]>('https://europe-west6-project-owlly.cloudfunctions.net/owlly/').pipe(
        first(),
        filter((owlly: Owlly[]) => owlly?.length > 0)
      ),
    ]).pipe(
      map(([slug, owlly]: [string | null, Owlly[]]) => {
        const filterOwlly: Owlly[] = owlly.filter((filteredOwlly: Owlly) => filteredOwlly.data.slug === (slug as string));

        return filterOwlly && filterOwlly.length > 0 ? filterOwlly[0] : undefined;
      })
    );
  }
}
