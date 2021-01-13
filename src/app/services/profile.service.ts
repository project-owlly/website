import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import firebase from 'firebase';

import {AngularFirestore} from '@angular/fire/firestore';
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

  async get(): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | undefined> {
    const user: firebase.User | null = await this.authService.getUser();
    const userRef = firebase.firestore().doc(`userProfile/${user?.uid}`);
    return userRef.get();
  }
}
