import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

import {Capacitor, Plugins} from '@capacitor/core';
import {filter, first} from 'rxjs/operators';
const {Browser} = Plugins;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  constructor(private pdfService: PdfService) {}

  async openEID() {
    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf | undefined) => {
        await Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(pdf?.url as string)});

        //TODO Navigate to next page
      });
  }
}
