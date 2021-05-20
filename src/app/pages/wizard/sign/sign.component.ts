import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Pdf} from '../../../types/pdf';
import {PdfService} from '../../../services/pdf.service';

import {AppLauncher} from '@capacitor/app-launcher';
import {Device, DeviceInfo} from '@capacitor/device';
import {Clipboard} from '@capacitor/clipboard';
import {Toast} from '@capacitor/toast';
import {Browser} from '@capacitor/browser';

import {filter, first, map, shareReplay} from 'rxjs/operators';
import {faCheckCircle, faQrcode, faInfoCircle, faFileSignature, faFileAlt, faFileExport} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  isMobile: boolean = window?.matchMedia('(any-pointer:coarse)').matches;

  faCheckCircle = faCheckCircle;
  faQrcode = faQrcode;
  faFileAlt = faFileAlt;
  faFileSignature = faFileSignature;
  faInfoCircle = faInfoCircle;
  faFileExport = faFileExport;
  importIsClicked: boolean = false;

  deviceInfo: any;

  readonly pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  readonly owllyId$: Observable<string | undefined> = this.route.paramMap.pipe(
    first(),
    filter((params: Params) => params.get('owllyId') !== null),
    map((params: Params) => params.get('owllyId')),
    shareReplay({
      bufferSize: 1,
      refCount: true,
    })
  );

  readonly configuration$: Observable<string | undefined> = this.route.paramMap.pipe(
    first(),
    filter((params: Params) => params.get('configuration') !== null),
    map((params: Params) => params.get('configuration')),
    shareReplay({
      bufferSize: 1,
      refCount: true,
    })
  );

  constructor(private route: ActivatedRoute, private router: Router, private pdfService: PdfService) {
    this.logDeviceInfo();
  }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    console.log(info);
    this.deviceInfo = (await Device.getInfo()) as DeviceInfo;

    console.log('mobile from matchMedia:' + this.isMobile);
    if (this.deviceInfo.platform === 'web') {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    console.log('mobile from deviceInfo:' + this.isMobile);
  };

  import() {
    this.importIsClicked = true;

    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => {
        const canOpenUrl = await AppLauncher.canOpenUrl({
          url: 'eidplus',
        }).catch((err: any) => {
          alert('canOpenUrl: ' + err.message);
        });

        if (canOpenUrl) {
          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(
            async (err: any) => {
              await Toast.show({
                text: 'Der Import hat nicht funktioniert 1: ' + err.message,
                position: 'top',
              }).catch((err) => {
                alert(err.message);
              });
            }
          );

          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURI(pdf?.url as string)}).catch(async (err: any) => {
            await Toast.show({
              text: 'Der Import hat nicht funktioniert 2: ' + err.message,
              position: 'top',
            }).catch((err) => {
              alert(err.message);
            });
          });

          /*await Browser.open({
            url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url,
            windowName: '_self',
          }).catch(async (err) => {
            await Toast.show({
              text: 'Der Import hat nicht funktioniert: ' + err.message,
              position: 'top',
            }).catch((err) => {
              alert(err.message);
            });
          });*/

          await Clipboard.write({
            string: 'briefkasten@owlly.ch',
          });

          /*await Toast.show({
            text: 'E-Mail Adresse "briefkasten@owlly.ch" wurde in die Zwischenablage kopiert.',
            position: 'top',
          }).catch((err) => {
            alert(err.message);
          });*/
        } else {
          await Toast.show({
            text: 'Dokument konnte nicht importiert werden.',
            position: 'top',
          }).catch((err) => {
            alert(err.message);
          });
        }
      });
  }

  navigate(): void {
    this.route.paramMap.pipe(first()).subscribe(async (param: any) => {
      await this.router.navigate(['/finish', param.get('owllyId')]).catch((err: any) => {
        console.log(err.message);
      });
    });
  }
}
