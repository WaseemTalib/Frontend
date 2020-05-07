import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_krEe5NVnoWYNk9GPlx7BN3ZWWPlDiKc",
  authDomain: "front-end-page.firebaseapp.com",
  databaseURL: "https://front-end-page.firebaseio.com",
  projectId: "front-end-page",
  storageBucket: "front-end-page.appspot.com",
  messagingSenderId: "847765272351",
  appId: "1:847765272351:web:1789540d53b5736e2e222a",
  measurementId: "G-G4RQY176Q6"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();


export {db, storage, storageRef}

export default firebase;