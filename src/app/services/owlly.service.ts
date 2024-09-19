import {Injectable} from '@angular/core';
import {Functions, httpsCallable} from '@angular/fire/functions';
import {Firestore, collection, doc, CollectionReference, DocumentReference, query, where, limit, docData} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Owlly, OwllyData} from '../types/owlly';
import {AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class OwllyService {
  private readonly collection: CollectionReference<OwllyData>;

  constructor(private firestore: Firestore, private functions: Functions) {
    this.collection = collection(this.firestore, 'owlly') as CollectionReference<OwllyData>;
  }

  getOwlly() {
    return collection(this.firestore, 'owlly') as CollectionReference<OwllyData>;
  }

  callOwlly(): Observable<void> {
    const callable = httpsCallable(this.functions, 'owlly');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const observer = callable({});
    observer.then((result) => {
      //console.log('OWLLY ' + JSON.stringify(result.data));
    });
    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });

    // TODO: bad practice, no subscribe in services or take care of detroying the subscription
    /*obs.subscribe(async (res) => {
      console.log(JSON.stringify(res));
    });*/
  }

  owlly(owllyId: string): Observable<Owlly | undefined> {
    const docRef: DocumentReference<OwllyData | undefined> = doc(this.collection, owllyId) as DocumentReference<OwllyData | undefined>;

    return docData<OwllyData | undefined>(docRef).pipe(
      map((data: OwllyData | undefined) => {
        return data
          ? ({
              id: owllyId,
              ref: docRef,
              data,
            } as Owlly)
          : undefined;
      })
    );
  }

  owllyBySlug(slug: string): Observable<Owlly> {
    const collectionRef = collection(this.firestore, 'owlly') as CollectionReference<OwllyData>;
    const angularFirestoreCollection = new AngularFirestoreCollection<OwllyData>(collectionRef as any, this.firestore as any, this.firestore as any);

    return this.snapshotCollection(angularFirestoreCollection).pipe(
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
          const ref = a.payload.doc.ref as unknown as DocumentReference<OwllyData>;
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
