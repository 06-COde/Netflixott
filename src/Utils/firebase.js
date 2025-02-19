// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbAfCrpXmRIPHKep1LV63SjZfmSJ_hckA",
  authDomain: "netflixott-e3ce6.firebaseapp.com",
  projectId: "netflixott-e3ce6",
  storageBucket: "netflixott-e3ce6.firebasestorage.app",
  messagingSenderId: "403154282315",
  appId: "1:403154282315:web:c43182772eeda35f276ace",
  measurementId: "G-FGZXWV851P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();

