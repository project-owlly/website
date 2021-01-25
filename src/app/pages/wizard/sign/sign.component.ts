import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Pdf} from '../../../types/pdf';
import {PdfService} from '../../../services/pdf.service';
import {Capacitor, DeviceInfo, Plugins} from '@capacitor/core';
import {filter, first, map, shareReplay} from 'rxjs/operators';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const {Browser, Device, App, Toast, Clipboard} = Plugins;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  isMobile: boolean = window?.matchMedia('(any-pointer:coarse)').matches;
  public deviceInfo: DeviceInfo | undefined;
  faCheckCircle = faCheckCircle;
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

  constructor(private route: ActivatedRoute, private router: Router, private pdfService: PdfService) {
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
        const canOpenUrl = await App.canOpenUrl({
          url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url,
        }).catch((err) => {
          alert('canOpenUrl: ' + err.message);
        });

        if (canOpenUrl) {
          await Browser.open({
            url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string),
            windowName: '_self',
          }).catch(async (err) => {
            await Toast.show({
              text: 'Der Import hat nicht funktioniert: ' + err.message,
              position: 'top',
            }).catch((err) => {
              alert(err.message);
            });
          });

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
      });
  }

  navigate(): void {
    this.route.paramMap.pipe(first()).subscribe(async (param) => {
      await this.router.navigate(['/finish', param.get('owllyId')]).catch((err) => {
        console.log(err.message);
      });
    });
  }
}
