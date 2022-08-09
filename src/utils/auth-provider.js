import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/index";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  onAuthStateChanged,
};
