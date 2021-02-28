import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OwllyCampaignerService {
  constructor(private firestore: AngularFirestore) {}

  getOwlly() {
    //this.firestore.collectionGroup('8200').get().  ('owlly'). .ref.where("status", "==", true).get().then((querySnapshot=>{
    //}))
  }
}
