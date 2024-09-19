import {Injectable} from '@angular/core';

import {DocumentReference, Firestore, CollectionReference, addDoc, collection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(public firestore: Firestore) {}

  createQuestionRecord(record: any): Promise<DocumentReference<any>> {
    const questionCollection: CollectionReference = collection(this.firestore, 'question');
    return addDoc(questionCollection, record);
  }
}
