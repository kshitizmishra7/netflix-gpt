// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxcSsOeQkSTvWtDhbyRmlJ6p_HPCWqvW0",
  authDomain: "netflixgpt-83156.firebaseapp.com",
  projectId: "netflixgpt-83156",
  storageBucket: "netflixgpt-83156.firebasestorage.app",
  messagingSenderId: "498155604027",
  appId: "1:498155604027:web:3699540e31c93d2e6e741e",
  measurementId: "G-ZSYY9JYN6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();