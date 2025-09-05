import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc } from "firebase/firestore";

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

export async function getUsernameById(userID) {
  const q = query(
    collection(db, "Usernames"),
    where("__name__", "==", userID) 
  );
  const snap = await getDoc(q);
  return snap.doc;
}

export async function getUsernamesByIds(userIds) {
  const q = query(
    collection(db, "Usernames"),
    where("__name__", "in", userIds)
  );
  const snap = await getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, Username: doc.data().Username }));
}

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);