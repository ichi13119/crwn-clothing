import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB170e6iczKShgAyzHAzJdBvrgGQIihwdQ",
  authDomain: "crwn-db-19d40.firebaseapp.com",
  databaseURL: "https://crwn-db-19d40.firebaseio.com",
  projectId: "crwn-db-19d40",
  storageBucket: "crwn-db-19d40.appspot.com",
  messagingSenderId: "561549970087",
  appId: "1:561549970087:web:b8e17b0259f93cbd3ce982",
  measurementId: "G-4FS5X2SVQG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;