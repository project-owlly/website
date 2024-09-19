import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

import {AngularFirestore} from '@angular/fire/compat/firestore';
import {DocumentData, DocumentSnapshot} from 'firebase/firestore';
import * as firebase from 'firebase/compat';

// Removed firebase imports as they are not needed
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private firestore: AngularFirestore, private authService: AuthService) {}
  async save(profile: any) {
    let userProfile = await this.authService.getUser();
    return this.firestore.collection('userProfile').doc(userProfile?.uid).set(profile, {
      merge: true,
    });
  }

  async get(): Promise<DocumentSnapshot<DocumentData> | undefined> {
    const user = await this.authService.getUser();
    const userRef = this.firestore.collection('userProfile').doc(user?.uid).ref;
    return userRef.get() as unknown as Promise<DocumentSnapshot<DocumentData>>;
  }
}
