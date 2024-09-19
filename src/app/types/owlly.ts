import {DocumentReference, Timestamp} from 'firebase/firestore';

export interface OwllyData {
  title: string;
  text: string; //offizieller abstimmungstext
  description: string; // einen "marketing" beschreibung
  goals: string[]; // diverse goals

  link: string; //external link for sharing
  slug: string; //scully

  type: 'initiative' | 'referendum';

  level: 'canton' | 'national'; //delete one of those

  ruleValue: 'sh';
  status: boolean;

  author: string; // liste von komitee mitgliedern gemäss Volksbegehren
  campaignerEmail: string; //
  campaignerName: string; //
  campaignerRef: DocumentReference; // aus benutzerprofil

  published: Timestamp;
}

export interface Owlly {
  id: string;
  ref: DocumentReference;

  data: OwllyData;
}
