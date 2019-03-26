import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface Vocab {
  vocab: string,
  category: string,
  subcategory: string,
  notes: string
}

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  private vocabCollection: AngularFirestoreCollection<Vocab>;

  vocabs$: Observable<Vocab[]>;

  constructor(private db: AngularFirestore) {
    this.vocabCollection = this.db.collection<Vocab>('Vocabulary');

    console.log("in constructor");

    this.vocabs$ = this.vocabCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Vocab;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  getVocabs() {
    // return this.vocabs$;

    return this.vocabCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Vocab;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getVocab(id) {
    return this.vocabCollection.doc<Vocab>(id).valueChanges();
  }

  updateVocab(vocab: Vocab, id: string){
    return this.vocabCollection.doc(id).update(vocab);
  }

  addVocab(vocab: Vocab){
    return this.vocabCollection.add(vocab);
  }

  removeVocab(id){
    return this.vocabCollection.doc(id).delete();
  }

}
