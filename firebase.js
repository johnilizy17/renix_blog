// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1YRsvrG4sJ5s2pVWHHFv7argGGYqKJ4I",
  authDomain: "twit-a10e4.firebaseapp.com",
  projectId: "twit-a10e4",
  storageBucket: "twit-a10e4.appspot.com",
  messagingSenderId: "419197897516",
  appId: "1:419197897516:web:163118df72c90f2450fa89",
  measurementId: "G-GC2BQSKL58"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
