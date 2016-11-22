import firebase from 'firebase'

  // Initialize Firebase
const config = {
  apiKey: "AIzaSyCE8H6Bz8WAgBUpk4q34ml6lEiu_r9zopk",
  authDomain: "vanclei-test.firebaseapp.com",
  databaseURL: "https://vanclei-test.firebaseio.com",
  storageBucket: "vanclei-test.appspot.com",
  messagingSenderId: "454753712364"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth