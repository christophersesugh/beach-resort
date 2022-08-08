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

const register = async ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    console.log(email, password)
  );
};

const login = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password).then(
    console.log(email, password)
  );
};

const logout = async () => {
  signOut(auth);
};

export { register, login, logout, auth, onAuthStateChanged };
