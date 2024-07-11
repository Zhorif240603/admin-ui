import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuSLuEIa8rB19HwKJ9iD5k0Ht1cblzk3Q", //api key harsunya process.env.REACT_APP_FIREBASE_KEY
  authDomain: "store-tutorial-c424f.firebaseapp.com",
  projectId: "store-tutorial-c424f",
  storageBucket: "store-tutorial-c424f.appspot.com",
  messagingSenderId: "481200882042",
  appId: "1:481200882042:web:fe97482039f4893f0056c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();