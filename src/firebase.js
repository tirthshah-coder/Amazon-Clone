import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZidabT3dl0G50M5ymynZHZxNBY5dG5II",
    authDomain: "clone-ddefe.firebaseapp.com",
    projectId: "clone-ddefe",
    storageBucket: "clone-ddefe.appspot.com",
    messagingSenderId: "445662571780",
    appId: "1:445662571780:web:c7c9effe54694cba0ab451",
    measurementId: "G-JWRFDB46GZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};