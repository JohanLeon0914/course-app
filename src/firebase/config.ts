import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPmDPED-_yY2lbwY81WvoeBuUSBHgdfr0",
  authDomain: "courses-app-f0ef1.firebaseapp.com",
  projectId: "courses-app-f0ef1",
  storageBucket: "courses-app-f0ef1.appspot.com",
  messagingSenderId: "423663275902",
  appId: "1:423663275902:web:ca899d18e0acf3fa99ad2f"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(firebaseApp);
