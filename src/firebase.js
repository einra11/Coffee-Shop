import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDtAUzOIREOOx44l5i3w9ttc6LdXWiCpDY",
    authDomain: "coffee-shop-a7b0b.firebaseapp.com",
    databaseURL: "https://coffee-shop-a7b0b.firebaseio.com",
    projectId: "coffee-shop-a7b0b",
    storageBucket: "coffee-shop-a7b0b.appspot.com",
    messagingSenderId: "987217447459"
  };
  
  firebase.initializeApp(config);

  export default {
      database: firebase.database()
  }