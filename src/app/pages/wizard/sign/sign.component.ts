import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

import {Capacitor, DeviceInfo, Plugins} from '@capacitor/core';
import {filter, first, map, shareReplay} from 'rxjs/operators';
const {Browser, Device} = Plugins;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  public deviceInfo: DeviceInfo | undefined;

  readonly owllyId$: Observable<string | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.owllyId !== null),
    map((params: Params) => params.owllyId),
    shareReplay({bufferSize: 1, refCount: true})
  );

  readonly pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  constructor(private route: ActivatedRoute, private router: Router, private pdfService: PdfService) {
    Device.getInfo().then((deviceInfo) => {
      this.deviceInfo = deviceInfo;
    });
  }

  async openEID() {
    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => {
        alert('click openEID ' + 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string));

        await Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)}).catch((err) => {
          alert(err.message);
        });

        //TODO Navigate to next page
        setTimeout(() => {
          this.navigate();
        }, 1000);
      });
  }
  navigate(): void {
    this.route.queryParams.pipe(first()).subscribe(async (owllyId) => {
      await this.router.navigate(['/finish', owllyId]).catch((err) => {
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
