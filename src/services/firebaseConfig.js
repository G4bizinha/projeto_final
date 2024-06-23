import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyApkceNpGR0MszW5u7OonMUsX1MzHyrdbk",
  authDomain: "projetodevweb-121a9.firebaseapp.com",
  projectId: "projetodevweb-121a9",
  storageBucket: "projetodevweb-121a9.appspot.com",
  messagingSenderId: "775631167141",
  appId: "1:775631167141:web:71bd7dc94b9cb5ea9ef74c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
  db
} 