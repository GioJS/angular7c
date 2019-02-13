import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      console.log(response);
    }).catch((error) => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then((response) => {
      firebase.auth().currentUser.getIdToken().then((token) => {
        this.token = token;
        console.log(this.token);
        this.router.navigate(['/']);
      });
    }).catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token) => {
      this.token = token;
      console.log(this.token);
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut().then((response) => this.token = null);
  }
}
