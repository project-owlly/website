import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

import {Capacitor, DeviceInfo, Plugins} from '@capacitor/core';
import {filter, first, map, shareReplay} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const {Browser, Device, App, Toast, Clipboard} = Plugins;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  public deviceInfo: DeviceInfo | undefined;

  readonly owllyId$: Observable<string | undefined> = this.route.paramMap.pipe(
    first(),
    filter((params: Params) => params.get('owllyId') !== null),
    map((params: Params) => params.get('owllyId')),
    shareReplay({
      bufferSize: 1,
      refCount: true,
    })
  );

  readonly pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  //link: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private pdfService: PdfService
  ) {
    Device.getInfo().then((deviceInfo) => {
      this.deviceInfo = deviceInfo;
    });
  }

  import() {
    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => {
        /*this.link = this.sanitizer.bypassSecurityTrustUrl(
          'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)
        ) as string;*/

        /*console.log('debug start');
        console.log(pdf?.url);
        console.log('eidplus://did:eidplus:undefined/document?source=' + pdf?.url);
        console.log('---- debug ----');

        console.log(encodeURIComponent(pdf?.url as string));
        console.log('eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string));
        console.log('debug ende');*/

        const canOpenUrl = await App.canOpenUrl({
          url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url,
        }).catch((err) => {
          alert('canOpenUrl: ' + err.message);
        });

        if (canOpenUrl) {
          /*await Browser.open({
            url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url,
            windowName: '_self',
          }).catch((err) => {
            alert('openUrl1: ' + err.message);
          });*/

          await Browser.open({
            url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string),
            windowName: '_self',
          }).catch((err) => {
            alert('openUrl2: ' + err.message);
          });

          /*await Browser.open({
            url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent('https://www.shaz.ch/download/Ausgabe_23.pdf'),
            windowName: '_self',
          }).catch((err) => {
            alert('openUrl3: ' + err.message);
          });

          await Browser.open({
            url: 'eidplus://did:eidplus:undefined/share?endpoint=wss%3A%2F%2Feid.sh.ch%2Fapi%2Fdevice%2Fbabb8a05-15b0-4d10-b02d-ca6ffe057d15%2F&amp',
            windowName: '_self',
          }).catch((err) => {
            alert('openUrl4: ' + err.message);
          });*/

          //did:eidplus:undefined/share?

          /*
          let headers = new HttpHeaders();
          headers = headers.set('Accept', 'application/pdf');
          this.httpClient.get(pdf?.url as string, {responseType: 'blob', headers: headers}).subscribe(
            async (response: Blob) => {
              console.log(response);

              const url = window.URL.createObjectURL(response);

              console.log(url);

              await Browser.open({
                url: 'eidplus://did:eidplus:undefined/document?source=' + url,
                windowName: '_self',
              }).catch((err) => {
                alert('openUrl1 via donwload: ' + err.message);
              });
              await Browser.open({
                url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(url),
                windowName: '_self',
              }).catch((err) => {
                alert('openUrl2 via donwload: ' + err.message);
              });
            },
            (err) => {
              alert('httpClient via donwload: ' + err.message);
            }
          );*/

          await Clipboard.write({
            string: 'briefkasten@owlly.ch',
          });

          await Toast.show({
            text: 'E-Mail Adresse "briefkasten@owlly.ch" wurde in die Zwischenablage kopiert.',
            position: 'top',
          }).catch((err) => {
            alert(err.message);
          });
        } else {
          await Toast.show({
            text: 'Dokument konnte nicht importiert werden.',
            position: 'top',
          }).catch((err) => {
            alert(err.message);
          });
        }
        /*setTimeout(() => {
          this.navigate();
        }, 1000);*/
      });
  }

  navigate(): void {
    this.route.paramMap.pipe(first()).subscribe(async (param) => {
      //console.log(JSON.stringify(owllyId));

      await this.router.navigate(['/finish', param.get('owllyId')]).catch((err) => {
        console.log(err.message);
      });
    });

    /*this.owllyId$
      .pipe(
        filter((owllyId: string | undefined) => owllyId !== undefined),
        first()
      )
      .subscribe(async (owllyId: string | undefined) => {
        await this.router.navigate(['/finish', owllyId]).catch((err) => {
          console.log(err.message);
        });
      });*/
  }
}
