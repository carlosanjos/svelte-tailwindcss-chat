import firebase from "firebase/app";
import config from "~/config/firebase";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();