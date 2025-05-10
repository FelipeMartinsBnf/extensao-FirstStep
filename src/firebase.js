// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0vGbPqYjeeCgTkLqRr5byyv_jrRWnMT0",
  authDomain: "first-step-2ea04.firebaseapp.com",
  projectId: "first-step-2ea04",
  storageBucket: "first-step-2ea04.firebasestorage.app",
  messagingSenderId: "487156468040",
  appId: "1:487156468040:web:d8e0824d1eb84026998b7d",
  measurementId: "G-LG70D7RMDC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);