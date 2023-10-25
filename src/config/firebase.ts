// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpEbvGw1piZVEhGcUgtVBc3P80DTPniFI",
  authDomain: "social-media-39e8c.firebaseapp.com",
  projectId: "social-media-39e8c",
  storageBucket: "social-media-39e8c.appspot.com",
  messagingSenderId: "443133391521",
  appId: "1:443133391521:web:19423f1fceeb9df719f6e0",
  measurementId: "G-MG2BP53336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);