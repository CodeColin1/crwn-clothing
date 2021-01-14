import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-JPAK2ZpXOta7OTTLsgf9YkuQQZb5Fcs",
    authDomain: "crwn-db-84caf.firebaseapp.com",
    projectId: "crwn-db-84caf",
    storageBucket: "crwn-db-84caf.appspot.com",
    messagingSenderId: "381103468821",
    appId: "1:381103468821:web:338caa3e404a9e8ff2f91c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;