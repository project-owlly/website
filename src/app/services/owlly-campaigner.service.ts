import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Owlly, OwllyData} from '../types/owlly';

@Injectable({
  providedIn: 'root',
})
export class OwllyCampaignerService {
  constructor(private firestore: AngularFirestore) {}

  getAllActiveOwlly() {
    return this.firestore.collection<OwllyData>('owlly').ref.where('status', '==', 'true').get();
  }
}
