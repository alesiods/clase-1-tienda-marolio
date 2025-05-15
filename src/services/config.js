
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-75910.firebaseapp.com",
  projectId: "final-75910",
  storageBucket: "final-75910.firebasestorage.app",
  messagingSenderId: "844487784837",
  appId: "1:844487784837:web:e94226465edec8a1db6cec"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



///////////////////////////////////////////

