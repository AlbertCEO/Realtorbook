// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtorbook-65b60.firebaseapp.com",
  projectId: "realtorbook-65b60",
  storageBucket: "realtorbook-65b60.appspot.com",
  messagingSenderId: "675264759628",
  appId: "1:675264759628:web:173d6451a36d4c627231e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);