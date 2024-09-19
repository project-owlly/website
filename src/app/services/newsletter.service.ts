import {Injectable} from '@angular/core';

import {Firestore, DocumentReference, collection, doc, setDoc, addDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor(private firestore: Firestore) {}

  createNewsletterRecord(record: any): Promise<void> {
    const newsletterCollection = collection(this.firestore, 'newsletter');
    const newsletterDoc = doc(newsletterCollection, record.email);
    return setDoc(newsletterDoc, record);
  }

  createFeedbackRecord(record: any): Promise<DocumentReference<any>> {
    const feedbackCollection = collection(this.firestore, 'feedback');
    return addDoc(feedbackCollection, record);
  }
  getNewsletterSubscriptions() {
    const newsletterCollection = collection(this.firestore, 'newsletter');
    return newsletterCollection;
  }

  sendNewsletter(recipients: any[]) {
    for (let mail of recipients) {
      /*  this.firestore.collection('sendEmail').add({
        to: mail.email,
        template: {
          data: {
            firstName: mail.vorname,
          },
          name: 'newsletterWelcomeMail',
        },
      });*/
      console.log(mail.email);
    }
  }
}
