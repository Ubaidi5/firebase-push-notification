import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBG2A27rmFk-iGUAQtdPw3IduMw5cOVVWM",
  authDomain: "madebyubaid.firebaseapp.com",
  projectId: "madebyubaid",
  storageBucket: "madebyubaid.appspot.com",
  messagingSenderId: "13687249253",
  appId: "1:13687249253:web:98e71096392b9d7c7d298c",
  measurementId: "G-5Y4HGJ774Z",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
