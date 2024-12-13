import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyCDbH330Afs33bDpQDBBwZdywWWNh0atIE",
  authDomain: "desktop-192aa.firebaseapp.com",
  databaseURL: "https://desktop-192aa.firebaseio.com",
  projectId: "desktop-192aa",
  storageBucket: "desktop-192aa.appspot.com",
  messagingSenderId: "612491005452"
};

const devConfig = {
  apiKey: "AIzaSyCDbH330Afs33bDpQDBBwZdywWWNh0atIE",
  authDomain: "desktop-192aa.firebaseapp.com",
  databaseURL: "https://desktop-192aa.firebaseio.com",
  projectId: "desktop-192aa",
  storageBucket: "desktop-192aa.appspot.com",
  messagingSenderId: "612491005452"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
