import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {combineLatest, Observable, of} from 'rxjs';
import {catchError, filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

import {EidUserData} from '../../../types/eid';
import {Pdf} from '../../../types/pdf';

import {DeviceInfo, Plugins} from '@capacitor/core';
const {Browser, Device} = Plugins;

import {OidcService} from 'src/app/services/oidc.service';
import {PdfService} from 'src/app/services/pdf.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
})
export class PdfComponent implements OnInit {
  readonly useData$: Observable<EidUserData | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.code !== null),
    map((params: Params) => params.code),
    switchMap((code: string) => this.oidcService.getEidUserData(code)),
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

  public deviceInfo: DeviceInfo | undefined;

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

    Device.getInfo().then((deviceInfo) => {
      this.deviceInfo = deviceInfo;
    });
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
      this.useData$.pipe(filter((userData: EidUserData | undefined) => userData !== undefined)) as Observable<EidUserData>,
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
    this.owllyId$
      .pipe(
        filter((owllyId: string | undefined) => owllyId !== undefined),
        first()
      )
      .subscribe(async (owllyId: string | undefined) => {
        await this.router.navigate(['/sign', owllyId]).catch((err) => {
          console.log(err.message);
        });
      });
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
