import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNyUXCBF59y4M6hD5nQZJN8L3QP-8jyvQ",
    authDomain: "new-tweet-clone.firebaseapp.com",
    projectId: "new-tweet-clone",
    storageBucket: "new-tweet-clone.appspot.com",
    messagingSenderId: "400202226104",
    appId: "1:400202226104:web:673e5c1d4294fa3066d74d"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;