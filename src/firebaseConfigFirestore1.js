import firebase from 'firebase/app'
import 'firebase/firestore'

const firestoreConfig = {
    apiKey: "AIzaSyBMvJ2cLH2XD6jifsTqFJvJIxL9AoLRS0A",
    authDomain: "pruebareact-9824e.firebaseapp.com",
    projectId: "pruebareact-9824e",
    storageBucket: "pruebareact-9824e.appspot.com",
    messagingSenderId: "363257200758",
    appId: "1:363257200758:web:b1d067e839700aaee35f57",
    measurementId: "G-784WQ6S7G1"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firestoreConfig);

const store = fire.firestore()

export{store}