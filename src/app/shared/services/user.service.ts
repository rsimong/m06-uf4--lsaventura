import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        localStorage.setItem("user",JSON.stringify(response.user.providerData))
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  create(name: string, site: string, date: Date, difficulty: string ){

    

  }
}