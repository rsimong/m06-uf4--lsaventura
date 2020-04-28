import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class UserService {

  user: Observable<firebase.User>; // Guarda datos de la basse de dades del usuari.
  constructor(
    private afAuth: AngularFireAuth,
    private route: Router
    ) {
    this.user = afAuth.authState; //Guarda esta usuari
  }

  login(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password) //metdode per defecte que porta el packet de fireBase per fer el logueig
      .then((response) => {
        localStorage.setItem("user",JSON.stringify(response.user.providerData)) //guardar en localStorage el token que es diu user.
        this.route.navigate(["app"]); //redirigeix a app que es quan estas logueijat.
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  }
  logout() {
    this.afAuth.auth.signOut(); //metode per defecte que porta fireBase per fer el logaut
  }
}
