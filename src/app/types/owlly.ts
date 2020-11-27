import firebase from 'firebase/app';
import {DocumentReference} from '@angular/fire/firestore';

export interface OwllyData {
  title: string;
  text: string;
  goals: string[];

  link: string;

  type: 'initiative';

  level: 'canton';

  ruleName: 'canton';
  ruleValue: 'sh';

  author: string;
  campaignerEmail: string;
  campaignerName: string;

  published: firebase.firestore.Timestamp;
}

export interface Owlly {
  id: string;
  ref: DocumentReference;

  data: OwllyData;
}
