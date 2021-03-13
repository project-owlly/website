import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {combineLatest, forkJoin, Observable, of} from 'rxjs';
import {catchError, filter, first, map, mergeMap, shareReplay, switchMap} from 'rxjs/operators';

import {EidUserData} from '../../../types/eid';
import {Pdf} from '../../../types/pdf';

import {OidcService} from 'src/app/services/oidc.service';
import {PdfService} from 'src/app/services/pdf.service';
import {AuthService} from 'src/app/services/auth.service';
import {faSpinner, faCheckCircle, faInfoCircle, faFileSignature, faFileAlt, faFileExport} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  faSpinner = faSpinner;
  faCheckCircle = faCheckCircle;
  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;
  faFileAlt = faFileAlt;
  faFileExport = faFileExport;

  readonly userData$: Observable<EidUserData | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.code !== null),
    //map((params: Params) => params.code),
    //map((params: Params) => params.configuration),
    //switchMap((code: string) => this.oidcService.getEidUserData(code, 'zg')),

    map((params: Params) => params),
    switchMap((params: Params) => this.oidcService.getEidUserData(params.code, params.configuration)),

    first(),
    shareReplay({bufferSize: 1, refCount: true})
  );

  readonly pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  readonly owllyId$: Observable<string | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.owllyId !== null),
    map((params: Params) => params.owllyId),
    shareReplay({bufferSize: 1, refCount: true})
  );

  readonly configuration$: Observable<string | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.configuration !== null),
    map((params: Params) => params.configuration),
    shareReplay({bufferSize: 1, refCount: true})
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oidcService: OidcService,
    private pdfService: PdfService,
    private auth: AuthService
  ) {
    // TODO: start spinner
  }

  ngOnInit(): void {
    //this.openPdf();--> Display pdf in modal instead of open link?

    this.loadPdf();
  }

  /*private openPdf(): void {
    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => await Browser.open({url: pdf?.url as string}));
  }*/

  private loadPdf(): void {
    combineLatest([
      this.route.queryParams.pipe(
        first(),
        filter((params: Params) => params.owllyId !== null),
        map((params: Params) => params.owllyId)
      ) as Observable<string>,
      this.userData$.pipe(filter((userData: EidUserData | undefined) => userData !== undefined)) as Observable<EidUserData>,
    ])
      .pipe(
        first(),
        switchMap(([owllyId, userData]: [string, EidUserData]) => this.pdfService.generatePDF({userData, owllyId})),
        catchError((err) => {
          console.error(err);
          return of({url: undefined} as Pdf);
        }),
        first()
      )
      .subscribe((pdf: Pdf) => {
        this.pdfService.next(pdf);
      });
  }

  navigate(): void {
    forkJoin({
      owllyId: this.owllyId$.pipe(
        filter((owllyId: string | undefined) => owllyId !== undefined),
        first()
      ),
      configuration: this.configuration$.pipe(
        filter((configuration: string | undefined) => configuration !== undefined),
        first()
      ),
    }).subscribe(async (values: any) => {
      await this.router.navigate(['/sign', [values.owllyId, values.configuration]]).catch((err) => {
        console.log(err.message);
      });
    });

    /*    this.owllyId$
      .pipe(
        filter((owllyId: string | undefined) => owllyId !== undefined),
        first()
      )
      .subscribe(async (owllyId: string | undefined) => {
        await this.router.navigate(['/sign', owllyId]).catch((err) => {
          console.log(err.message);
        });
      });
      */
  }

  // async fileWrite(data, filename) {
  //   try {
  //     const result = await Filesystem.writeFile({
  //       path: 'owlly/' + filename,
  //       data: data,
  //       directory: FilesystemDirectory.Documents,
  //       encoding: FilesystemEncoding.UTF8,
  //     });
  //     console.log('Wrote file', result);
  //   } catch (e) {
  //     console.error('Unable to write file', e);
  //   }
  // }
  //
  // async fileRead(filename) {
  //   let contents = await Filesystem.readFile({
  //     path: 'owlly/' + filename,
  //     directory: FilesystemDirectory.Documents,
  //     encoding: FilesystemEncoding.UTF8,
  //   });
  //   console.log(contents);
  // }
}
