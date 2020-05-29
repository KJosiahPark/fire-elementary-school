import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }

    this.db = app.database();
    this.auth = app.auth();
  }

  // *** Auth API ***

  registerUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  signInUserWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  signOutUser = () => this.auth.signOut();

  // doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  // doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  // // *** User API ***

  // user = uid => this.db.ref(`users/${uid}`);

  // users = () => this.db.ref('users');
}

export default Firebase;