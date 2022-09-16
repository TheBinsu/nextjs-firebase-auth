import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase-admin/firestore'
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDuowxNJkkPlE6xx9nPamQmSkKBol4Ct28",
  authDomain: "next-js-authorisation.firebaseapp.com",
  projectId: "next-js-authorisation",
  storageBucket: "next-js-authorisation.appspot.com",
  messagingSenderId: "220825517268",
  appId: "1:220825517268:web:2e41419be02a5cd7df4f41"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth()
