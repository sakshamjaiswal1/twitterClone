import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiZj8Jesa91QENGXXU2IZNqMQPIpffouc",
    authDomain: "twitter-clone-f3ad1.firebaseapp.com",
    projectId: "twitter-clone-f3ad1",
    storageBucket: "twitter-clone-f3ad1.appspot.com",
    messagingSenderId: "331569121633",
    appId: "1:331569121633:web:81296500176a5b74fa5d20",
    measurementId: "G-3F6L9G2TES"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

export default db