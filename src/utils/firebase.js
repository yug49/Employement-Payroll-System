// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2-Bao94xctMGiFp1NuhgDCO-tXd9Sp28",
  authDomain: "employment-payroll-system.firebaseapp.com",
  projectId: "employment-payroll-system",
  storageBucket: "employment-payroll-system.appspot.com",
  messagingSenderId: "324039154242",
  appId: "1:324039154242:web:c1403e2e5cebbabbee2bdb",
  measurementId: "G-VQHH0MCE13"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


