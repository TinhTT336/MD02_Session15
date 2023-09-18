import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGFEu5T_SJvuhMkbLfuNqN5ML1qvD39Vc",
  authDomain: "login-with-8e9ac.firebaseapp.com",
  projectId: "login-with-8e9ac",
  storageBucket: "login-with-8e9ac.appspot.com",
  messagingSenderId: "1001358362713",
  appId: "1:1001358362713:web:9da2966385d4d597064948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
