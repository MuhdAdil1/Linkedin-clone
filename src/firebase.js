import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLS3WPYRoBYVTgnBhQF4-SwZyRz3npEkk",
  authDomain: "linkedin-16511.firebaseapp.com",
  projectId: "linkedin-16511",
  storageBucket: "linkedin-16511.appspot.com",
  messagingSenderId: "769856287027",
  appId: "1:769856287027:web:9e1208b8336c8b30d84e46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


 