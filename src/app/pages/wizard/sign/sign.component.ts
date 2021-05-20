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

import {filter, first, map, shareReplay, windowToggle} from 'rxjs/operators';
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

  urlstring: string =
    'eidplus://did:eidplus:undefined/document?source=https%3A%2F%2Fstorage.googleapis.com%2Fproject-owlly.appspot.com%2Ftempfiles%2FNY2do4TT98yZHGi0CTUe%2Fvelorouten-initiative.pdf%3FGoogleAccessId%3Dproject-owlly%2540appspot.gserviceaccount.com%26Expires%3D1621572046%26Signature%3DB6CpFe7FQXIRhYUqsECetVh1kDLOtVB05SgK3kceazM3pyortllGMgKkcu4nPcUcz9jqqGMkNzifOyIZJFXoQT6JQWrjq67cA7ngc2%252F8rrT6DXSdJfSZk5aDNOQLM3p%252BLTakKjMSrGyfEZg5fvVAm5op5Lfo%252BhMKQBM90uiIHUWFylYRe7WogzuT0IESmMzux7MXjfz969PklG54DmdCPOLdV4p8cN5i%252F%252BQiSdLD1FRREmyvTwlZw6CXY7gT%252BH3X708JX0k8bpGn%252BlfhRkT4Y37l5qlbybM7qxGMHBRDpnpAYd192wPW6DahcqWX5RqTpc44yPOVtTElDKa79C1cUQ%253D%253D';

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

    /*this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => {
        this.urlstring = this.urlstring + encodeURIComponent(pdf?.url as string);
        alert(this.urlstring);
      });*/
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

        if (canOpenUrl) {
          await AppLauncher.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(
            async (err: any) => {
              await Toast.show({
                text: 'Error: ' + err.message,
                position: 'bottom',
                duration: 'short',
              }).catch((err) => {
                alert(err.message);
              });

              window.open('eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string));
            }
          );
          /*
              alert('eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string));

              await Clipboard.write({
                string: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string),
              });

              Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch(async (err: any) => {
                await Toast.show({
                  text: 'Error Browser: ' + err.message,
                  position: 'bottom',
                  duration: 'short',
                }).catch((err) => {
                  alert(err.message);
                });
              });*/
          /*
          
        
          await new Promise((resolve) => setTimeout(resolve, 4000));

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

          /*
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

          */
        } else {
          await Toast.show({
            text: 'Das Dokument konnte nicht in deine eID+ importiert werden. Bitte Dokument herunterladen und manuell mit der eID+ App teilen um das Dokument zu importieren.',
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
