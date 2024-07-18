// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiqmPpec9ClImCVnwZyEsFGQNWU-RpWs0",
  authDomain: "obituary-ms.firebaseapp.com",
  projectId: "obituary-ms",
  storageBucket: "obituary-ms.appspot.com",
  messagingSenderId: "508448061115",
  appId: "1:508448061115:web:40df4a0cec62dd3eed9b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
