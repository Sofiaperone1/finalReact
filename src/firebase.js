import firebase from "firebase/app";

import 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcV8PfHcs8CGWWYzhyd4UsCx1b3tgOZpE",
    authDomain: "coder-e-commerce-1941e.firebaseapp.com",
    projectId: "coder-e-commerce-1941e",
    storageBucket: "coder-e-commerce-1941e.appspot.com",
    messagingSenderId: "449260243858",
    appId: "1:449260243858:web:8e51fec781023f66d48f4b"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);


//exportar firebase junto a su metodo firestore
export const db = fb.firestore();