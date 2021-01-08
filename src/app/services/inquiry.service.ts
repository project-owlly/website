import {Injectable} from '@angular/core';

import firebase from 'firebase';

import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  constructor(public firestore: AngularFirestore) {}

  createQuestionRecord(record: any): Promise<firebase.firestore.DocumentReference<any>> {
    return this.firestore.collection('inquiry').add(record);
  }
}
