import {Injectable} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Owlly, OwllyData} from '../types/owlly';

@Injectable({
  providedIn: 'root',
})
export class OwllyService {
  private readonly collection: AngularFirestoreCollection<OwllyData>;

  constructor(private firestore: AngularFirestore, private functions: AngularFireFunctions) {
    this.collection = this.firestore.collection<OwllyData>('owlly');
  }

  getOwlly() {
    return this.firestore.collection<OwllyData>('owlly');
  }

  callOwlly(): Observable<void> {
    const callable = this.functions.httpsCallable('owlly');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const observer = callable({});
    observer.subscribe((data) => {
      //console.log('OWLLY ' + JSON.stringify(data));
    });
    return observer;

    // TODO: bad practice, no subscribe in services or take care of detroying the subscription
    /*obs.subscribe(async (res) => {
      console.log(JSON.stringify(res));
    });*/
  }

  owlly(owllyId: string): Observable<Owlly | undefined> {
    const doc: AngularFirestoreDocument<OwllyData | undefined> = this.collection.doc<OwllyData | undefined>(owllyId);

    return doc.valueChanges().pipe(
      map((data: OwllyData | undefined) => {
        return data
          ? ({
              id: owllyId,
              ref: doc.ref,
              data,
            } as Owlly)
          : undefined;
      })
    );
  }

  owllyBySlug(slug: string): Observable<Owlly> {
    const collection: AngularFirestoreCollection<OwllyData> = this.firestore.collection<OwllyData>('owlly', (ref) => ref.where('slug', '==', slug).limit(1));

    return this.snapshotCollection(collection).pipe(
      filter((owlly: Owlly[]) => owlly?.length > 0),
      map((owlly: Owlly[]) => owlly[0])
    );
  }

  private snapshotCollection(collectionShare: AngularFirestoreCollection<OwllyData>): Observable<Owlly[]> {
    return collectionShare.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data: OwllyData = a.payload.doc.data() as OwllyData;
          const id = a.payload.doc.id;
          const ref = a.payload.doc.ref;
          return {
            id,
            ref,
            data,
          };
        });
      })
    );
  }
}
