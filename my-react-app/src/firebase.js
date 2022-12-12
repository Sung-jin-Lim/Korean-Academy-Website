// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_API_KEY



};

// const firebaseConfig = {
//   apiKey: "AIzaSyAs-GJWZBXmrY49aqPfvRQZXtM2l5F9JQE",
//   authDomain: "korean-academy.firebaseapp.com",
//   projectId: "korean-academy",
//   storageBucket: "korean-academy.appspot.com",
//   messagingSenderId: "397510767446",
//   appId: "1:397510767446:web:fdc865d9a6958d49761cf7",
//   measurementId: "G-5DS3LKSE2D"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
