import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ActivityService {

  constructor(private db: AngularFirestore) {
  
  }

  create(data){
    return this.db.collection('activities').add(data);
  }

  list():Observable<any>{
    return this.db.collection('activities').snapshotChanges();
    
  }
}