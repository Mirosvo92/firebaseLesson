import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth, private route: Router) { }

  facebookSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(() => this.route.navigate((['dashboard']) ));
  }

  emailSignIn (email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.route.navigate((['dashboard'])));
  }

  emailSignInUp (email, password) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.route.navigate((['dashboard'])));
  }

}
