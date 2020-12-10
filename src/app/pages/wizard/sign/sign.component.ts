import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

import {Capacitor, Plugins} from '@capacitor/core';
import {first} from 'rxjs/operators';

const {Browser} = Plugins;

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;
  isNative: boolean | undefined = false;

  url = '';

  constructor(private pdfService: PdfService) {
    this.isNative = Capacitor.isNative;
    this.pdf$.subscribe((pdf: any) => {
      this.url = pdf.pdf;
    });
  }

  async openEID() {
    await Browser.open({url: 'eidplus://did:eidplus:undefined/document?source=' + encodeURIComponent(this.url)});
  }
}
