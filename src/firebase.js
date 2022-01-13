
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/';
const firebaseConfig = {
  apiKey: "AIzaSyAAWCIO4ew3Hw000UwMKZfzF5Z-elSEerE",
  authDomain: "min-joyas.firebaseapp.com",
  projectId: "min-joyas",
  storageBucket: "min-joyas.appspot.com",
  messagingSenderId: "678027755946",
  appId: "1:678027755946:web:7c3ea904cc124d8c1cebd3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;