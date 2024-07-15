import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz6X3cyzHtIVFW-8ITHjKN-YDa3S4710I",
  authDomain: "store-tutorial-26b0c.firebaseapp.com",
  projectId: "store-tutorial-26b0c",
  storageBucket: "store-tutorial-26b0c.appspot.com",
  messagingSenderId: "973112012857",
  appId: "1:973112012857:web:eef17f451130454537dde8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);