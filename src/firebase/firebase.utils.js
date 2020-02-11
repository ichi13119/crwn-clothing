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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(snapShot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;