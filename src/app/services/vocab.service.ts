import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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

  private vocabs: Observable<Vocab[]>;

  constructor(db: AngularFirestore) {
    this.vocabCollection = db.collection<Vocab>('Vocabulary');

    this.vocabs = this.vocabCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getVocabs() {
    return this.vocabs;
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
