// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyDdRTx8m9ry9q2skL9QgllslchGfqqxa3Q",
  authDomain: "obituary2-da6c3.firebaseapp.com",
  projectId: "obituary2-da6c3",
  storageBucket: "obituary2-da6c3.appspot.com",
  messagingSenderId: "1097950468146",
  appId: "1:1097950468146:web:582f5ff4f957f786fa042b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
