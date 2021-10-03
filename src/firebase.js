import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwklB8hvRWl1pr2f-YirvbF94brtNmyI",

  authDomain: "twitter-clone-35c93.firebaseapp.com",

  projectId: "twitter-clone-35c93",

  storageBucket: "twitter-clone-35c93.appspot.com",

  messagingSenderId: "90619868425",

  appId: "1:90619868425:web:4228b9431ae809a0138fd8",

  measurementId: "G-9SBT57BSY4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
