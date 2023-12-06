import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCOHq-dHzJa5rsKdEJ8vv9ZkV4EWVpNUGI",
  authDomain: "pandora-database-a4b19.firebaseapp.com",
  projectId: "pandora-database-a4b19",
  storageBucket: "pandora-database-a4b19.appspot.com",
  messagingSenderId: "679993627531",
  appId: "1:679993627531:web:45b33724dffc61ba9cd58e"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
