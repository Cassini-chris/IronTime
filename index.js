// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiH93Uy1pf7nfXr1klnMapK0wwxHXE5hM",
  authDomain: "iron-time.firebaseapp.com",
  projectId: "iron-time",
  storageBucket: "iron-time.firebasestorage.app",
  messagingSenderId: "856225756433",
  appId: "1:856225756433:web:8b1363082fd386783b08b0",
  measurementId: "G-N6J2L5DGJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);