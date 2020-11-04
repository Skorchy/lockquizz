import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0hk_jrp4nmAP9J-nhraCp0MisJcIWYhk",
  authDomain: "lockdown-quiz-e4c65.firebaseapp.com",
  databaseURL: "https://lockdown-quiz-e4c65.firebaseio.com",
  projectId: "lockdown-quiz-e4c65",
  storageBucket: "lockdown-quiz-e4c65.appspot.com",
  messagingSenderId: "11505693790",
  appId: "1:11505693790:web:a47cd68115c4fb1fbc70cf",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
