import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

import {Capacitor, DeviceInfo, Plugins} from '@capacitor/core';
import {filter, first, map, shareReplay} from 'rxjs/operators';
const {Browser, Device, App, Toast} = Plugins;

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
    shareReplay({bufferSize: 1, refCount: true})
  );

  readonly pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

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
        const canOpenUrl = await App.canOpenUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url}).catch((err) => {
          alert('canOpenUrl: ' + err.message);
        });

        if (canOpenUrl) {
          await App.openUrl({url: 'eidplus://did:eidplus:undefined/document?source=' + pdf?.url}).catch((err) => {
            alert('openUrl: ' + err.message);
          });
          //await Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch((err) => {});
          await Toast.show({
            text: 'Dokument wurde importiert.',
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
        setTimeout(() => {
          this.navigate();
        }, 500);
      });
  }

  navigate(): void {
    this.route.paramMap.pipe(first()).subscribe(async (param) => {
      //console.log(JSON.stringify(owllyId));

      await this.router.navigate(['/finish', param.get('owllyId')]).catch((err) => {
        console.log(err.message);
      });
    });

    this.owllyId$
      .pipe(
        filter((owllyId: string | undefined) => owllyId !== undefined),
        first()
      )
      .subscribe(async (owllyId: string | undefined) => {
        await this.router.navigate(['/finish', owllyId]).catch((err) => {
          console.log(err.message);
        });
      });
  }
}
