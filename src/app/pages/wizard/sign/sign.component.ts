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
    this.deviceInfo = (await Device.getInfo()) as DeviceInfo;
    //console.log(this.deviceInfo);
    //alert(JSON.stringify(this.deviceInfo));

    /*console.log('mobile from matchMedia:' + this.isMobile);
    if (this.deviceInfo.platform === 'web') {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    console.log('mobile from deviceInfo:' + this.isMobile);*/
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
          url: 'eidplus://did:eidplus:undefined/',
        }).catch((err: any) => {
          alert('canOpenUrl: ' + err.message);
        });

        //did:eidplus:undefined/share?endpoint=wss%3A%2F%2Feid.sh.ch%2Fapi%2Fdevice%2Fe230fb94-22b7-4443-a5a7-8a5673d3a04a%2F&nonce=36a5dfaf-5cc1-4ec9-814f-e4d22db07629

        eidplus: if (canOpenUrl) {
          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(
            async (err: any) => {
              await Toast.show({
                text: 'Error: ' + err.message,
                position: 'bottom',
                duration: 'short',
              }).catch((err) => {
                alert(err.message);
              });
            }
          );

          await new Promise((resolve) => setTimeout(resolve, 4000));

          Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(async (err: any) => {
            await Toast.show({
              text: 'Error Browser: ' + err.message,
              position: 'bottom',
              duration: 'short',
            }).catch((err) => {
              alert(err.message);
            });
          });

          /*await new Promise((resolve) => setTimeout(resolve, 4000));

          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(
            async (err: any) => {
              await Toast.show({
                text: 'Error 1: ' + err.message,
                position: 'center',
                duration: 'long',
              }).catch((err) => {
                alert(err.message);
              });
            }
          );

          await new Promise((resolve) => setTimeout(resolve, 4000));

          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURI(pdf?.url as string)}).catch(async (err: any) => {
            await Toast.show({
              text: 'Error 2: ' + err.message,
              position: 'top',
              duration: 'long',
            }).catch((err) => {
              alert(err.message);
            });
          });*/

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

          await Toast.show({
            text: 'Die E-Mail Adresse "briefkasten@owlly.ch" wurde in die Zwischenablage kopiert.',
            position: 'top',
            duration: 'long',
          }).catch((err) => {
            alert(err.message);
          });
        } else {
          await Toast.show({
            text: 'Das Dokument konnte nicht in deine eID+ importiert werden.',
            position: 'top',
            duration: 'long',
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
