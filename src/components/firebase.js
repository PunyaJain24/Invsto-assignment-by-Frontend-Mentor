// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKuPQXQnCoEflPLkq5V7QaePu69PZgNrE",
  authDomain: "invsto-assignment-9b49c.firebaseapp.com",
  projectId: "invsto-assignment-9b49c",
  storageBucket: "invsto-assignment-9b49c.appspot.com",
  messagingSenderId: "196695769511",
  appId: "1:196695769511:web:b1b600ccd442d0f27b3682",
  measurementId: "G-1ZLGEQGYPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);