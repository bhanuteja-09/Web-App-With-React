// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Add Firestore if you plan to use it

const firebaseConfig = {
  apiKey: "AIzaSyA1HwVRPQ9WyFd_5D_chGIORp87gbs0-ck",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "web-app-with-react",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
