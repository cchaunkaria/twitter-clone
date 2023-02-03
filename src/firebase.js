import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZlayUICwQkx6Lz4COqWIQhtNgm3tbP2g",
    authDomain: "twitter-clone-2542c.firebaseapp.com",
    projectId: "twitter-clone-2542c",
    storageBucket: "twitter-clone-2542c.appspot.com",
    messagingSenderId: "469780339797",
    appId: "1:469780339797:web:90e989f786efffbc1ac8dc",
    measurementId: "G-05HCYDTE7T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };