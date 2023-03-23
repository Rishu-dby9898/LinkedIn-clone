import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: process.env["REACT_APP_API_KEY"],
  authDomain: "linkedin-clone-be2e5.firebaseapp.com",
  projectId: "linkedin-clone-be2e5",
  storageBucket: "linkedin-clone-be2e5.appspot.com",
  messagingSenderId: "46068287646",
  appId: "1:46068287646:web:939dde5a9061cb3528138f",
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
