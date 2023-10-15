import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5S0C8bHMWG87MPJdPGemAae9o_WkAF1g",
  authDomain: "go-playground-ae009.firebaseapp.com",
  projectId: "go-playground-ae009",
  storageBucket: "go-playground-ae009.appspot.com",
  messagingSenderId: "947978911836",
  appId: "1:947978911836:web:82e8dde978c2ff98bc2699",
  measurementId: "G-YK2ZZD6363",
};
// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export { auth };
