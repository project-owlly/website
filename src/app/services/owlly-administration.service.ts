import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Owlly, OwllyData} from '../types/owlly';
import {OwllyService} from './owlly.service';

@Injectable({
  providedIn: 'root',
})
export class OwllyAdministrationService {
  constructor(private firestore: AngularFirestore, private owllyService: OwllyService) {}

  getAllActiveOwlly() {
    return this.owllyService.getOwlly().ref.where('active', '==', true).get();
  }

  getCertifyList(owllyId: string) {
    return this.firestore.collection('owlly').doc(owllyId).collection('postalcode').doc('8200').collection('files').get();
  }
}
