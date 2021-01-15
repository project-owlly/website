import {Injectable} from '@angular/core';

import {AngularFireAuth, PERSISTENCE} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userId: string | undefined;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  getUser(): Promise<firebase.default.User | null> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  loginWithToken(token: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithCustomToken(token);
  }

  async login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    await this.afAuth.setPersistence('Session');
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
  applyActionCode(actionCode: string) {
    return this.afAuth.applyActionCode(actionCode);
  }
}
