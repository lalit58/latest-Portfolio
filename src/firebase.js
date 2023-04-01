// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCXLUI4AYZARyf2D5MuEJ3Cuwu1qeESo",
  authDomain: "lalit58-portfolio.firebaseapp.com",
  projectId: "lalit58-portfolio",
  storageBucket: "lalit58-portfolio.appspot.com",
  messagingSenderId: "434802235575",
  appId: "1:434802235575:web:3d1680d420cc84764fd532",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
