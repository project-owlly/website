import {Injectable} from '@angular/core';

import {Owlly, OwllyData} from '../types/owlly';
import {OwllyService} from './owlly.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class OwllyAdministrationService {
  constructor(private firestore: AngularFirestore, private owllyService: OwllyService) {}

  getAllActiveOwlly() {
    return this.firestore.collection<OwllyData>('owlly', (ref) => ref.where('active', '==', true)).get();
  }

  getCertifyList(owllyId: string, postalcode: string) {
    return this.firestore.collection('owlly').doc(owllyId).collection('postalcode').doc(postalcode).collection('files').get();
  }
}
