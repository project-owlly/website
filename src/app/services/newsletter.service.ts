import {Injectable} from '@angular/core';

import firebase from 'firebase/app';

import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor(private firestore: AngularFirestore) {}

  createNewsletterRecord(record: any): Promise<void> {
    return this.firestore.collection('newsletter').doc(record.email).set(record);
  }

  createFeedbackRecord(record: any): Promise<firebase.firestore.DocumentReference<any>> {
    return this.firestore.collection('feedback').add(record);
  }
}
