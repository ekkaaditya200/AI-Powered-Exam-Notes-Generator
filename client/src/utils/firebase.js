import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-9acd9.firebaseapp.com",
  projectId: "authexamnotes-9acd9",
  storageBucket: "authexamnotes-9acd9.firebasestorage.app",
  messagingSenderId: "997953413729",
  appId: "1:997953413729:web:bc711c35ca11fef0b5c020",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
