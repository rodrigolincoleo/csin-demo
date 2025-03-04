// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8tEBdynhJ9iIN7LOhecvW2Ro2iqLGsbE",
  authDomain: "csin-demo-3b8b2.firebaseapp.com",
  projectId: "csin-demo-3b8b2",
  storageBucket: "csin-demo-3b8b2.firebasestorage.app",
  messagingSenderId: "489505672852",
  appId: "1:489505672852:web:070c04c177e80e9f00ae81",
  measurementId: "G-CBDVGT2YR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);