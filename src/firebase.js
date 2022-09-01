// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUQi5tqBdH8o_tZdEfMDqYIj1T8HUBvPg",
  authDomain: "linkedin-clone-41113.firebaseapp.com",
  projectId: "linkedin-clone-41113",
  storageBucket: "linkedin-clone-41113.appspot.com",
  messagingSenderId: "844764271996",
  appId: "1:844764271996:web:c3b345ea8195db9692c0f9",
  measurementId: "G-RCZCQFT2LB",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const db = firebaseApp.firestore();
// const auth = getAuth(firebaseApp);
const auth = firebase.auth();

export { db, auth };
