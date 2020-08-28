import { Falta } from './../interfaces/falta';
import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaltaService {
  private faltasCollection: AngularFirestoreCollection<Falta>;

  // constructor(private afs: AngularFirestoreModule) {
  //   this.faltasCollection = this.afs.collection<Falta>('Faltas');
  //   this.faltasCollection = this.afs.collection<Falta>('Products');
  //  }

   getFaltas() {
    return this.faltasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data};
        })
      })
    )
   }

   addFaltas(falta: Falta) {

   }

   getFalta(id: string) {

   }

   updateFalta(id: string, falta: Falta){

   }
}
