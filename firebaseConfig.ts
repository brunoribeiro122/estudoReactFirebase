import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAFKHGBiG5NigmbT-DSbRyW9btf-OP-2-U",
  authDomain: "senai-authbrunolica.firebaseapp.com",
  projectId: "senai-authbrunolica",
  storageBucket: "senai-authbrunolica.appspot.com",
  messagingSenderId: "457543762257",
  appId: "1:457543762257:web:56150dfe89320221289370"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);