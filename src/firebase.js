// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMBAqvvgBCBpqql7g-Tmy2oG29-mTfzPE",
  authDomain: "meme237-356.firebaseapp.com",
  projectId: "meme237-356",
  storageBucket: "meme237-356.appspot.com",
  messagingSenderId: "196787003985",
  appId: "1:196787003985:web:8f8b4a06bfdbad25358e70",
  measurementId: "G-C2VZ5YK9WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);