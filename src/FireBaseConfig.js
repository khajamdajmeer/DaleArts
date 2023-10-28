// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYBP7NXL89xR_JFuF3BwZPqp5KujHK3Nk",
  authDomain: "assignment-4acc1.firebaseapp.com",
  projectId: "assignment-4acc1",
  storageBucket: "assignment-4acc1.appspot.com",
  messagingSenderId: "658634519421",
  appId: "1:658634519421:web:26b4a48598c22779ea5214",
  measurementId: "G-8MMS85S2VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);