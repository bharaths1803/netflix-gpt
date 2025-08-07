// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3NB0KyB9-WCVVP8uGmAfpWSR0e3dovs",
  authDomain: "netflixgpt-f7151.firebaseapp.com",
  projectId: "netflixgpt-f7151",
  storageBucket: "netflixgpt-f7151.firebasestorage.app",
  messagingSenderId: "968733033749",
  appId: "1:968733033749:web:06d90f23dfeee5a0af951c",
  measurementId: "G-Q4WF77HFGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
