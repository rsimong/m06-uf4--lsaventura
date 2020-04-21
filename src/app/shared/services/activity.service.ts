import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ActivityService {

  constructor(private db: AngularFirestore) {
  }

  list(): Observable<any> {
    return this.db.collection('activities').snapshotChanges();
  }

  getById(id: string): Promise<any> {
    return this.db.collection('activities').doc(id).ref.get();
  }

  create(data: any): Promise<any> {
    return this.db.collection('activities').add(data);
  }

  update(docId: string, data: any): Promise<any> {
    return this.db.collection('activities').doc(docId).set(data);
  }

  delete(docId: string): Promise<any> {
    return this.db.collection('activities').doc(docId).delete();
  }
}