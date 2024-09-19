import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/compat/firestore';
import {DocumentReference} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  constructor(public firestore: AngularFirestore) {}

  createQuestionRecord(record: any): Promise<DocumentReference<any>> {
    return this.firestore.collection('inquiry').add(record) as unknown as Promise<DocumentReference<any>>;
  }
}
