import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("RESPONSE DESDE FIREBASE: " + JSON.stringify(response));
        firebase.auth().currentUser.getIdToken().then(token => {
          this.token = token;
          this.router.navigate(['/']);
        })
      })
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = null;
      this.router.navigate(['login']);
    }).catch(error => {
      console.error("Ocurrió un error al salir " + JSON.stringify(error));
    })
  }
}
