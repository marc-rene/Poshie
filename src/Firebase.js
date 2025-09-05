import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVfADS0qHmevq6rTZ5a84lta4tFr98ZA",
  authDomain: "poshie-51fa8.firebaseapp.com",
  projectId: "poshie-51fa8",
  storageBucket: "poshie-51fa8.firebasestorage.app",
  messagingSenderId: "1074081194823",
  appId: "1:1074081194823:web:89f17d4d9095872f132262",
  measurementId: "G-6NC9ECVFG0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);