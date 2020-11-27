import {Injectable} from '@angular/core';

import {AngularFireFunctions} from '@angular/fire/functions';

import {BehaviorSubject, Observable} from 'rxjs';

import {Pdf} from '../types/pdf';
import {EidUserData} from '../types/eid';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private readonly pdfSubject: BehaviorSubject<Pdf | undefined> = new BehaviorSubject<Pdf | undefined>(undefined);

  pdf$: Observable<Pdf | undefined> = this.pdfSubject.asObservable();

  constructor(private functions: AngularFireFunctions) {}

  generatePDF(data: {userData: EidUserData; owllyId: string}): Observable<Pdf> {
    const callable = this.functions.httpsCallable('generatePDF');
    return callable(data);
  }

  next(pdf: Pdf | undefined): void {
    this.pdfSubject.next(pdf);
  }
}
