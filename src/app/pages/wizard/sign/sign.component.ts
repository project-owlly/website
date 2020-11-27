import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  constructor(private pdfService: PdfService) {}

  openEID(): void {
    // TODO
    alert('Open EID');
  }
}
