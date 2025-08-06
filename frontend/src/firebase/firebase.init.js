import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc6gT0S46QJ_mpc-zb2woCiXj1q0VmmC8",
  authDomain: "fir-auth-fa1dc.firebaseapp.com",
  projectId: "fir-auth-fa1dc",
  storageBucket: "fir-auth-fa1dc.firebasestorage.app",
  messagingSenderId: "745383405031",
  appId: "1:745383405031:web:ae6539b81949affdd50942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
