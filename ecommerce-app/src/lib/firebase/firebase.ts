// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfqBN0iqzds-n2ILn6wC5D-xVZFmiLjYE",
    authDomain: "e-commerce-demo-a6e44.firebaseapp.com",
    projectId: "e-commerce-demo-a6e44",
    storageBucket: "e-commerce-demo-a6e44.firebasestorage.app",
    messagingSenderId: "279572510834",
    appId: "1:279572510834:web:5d24d608ce3a952c52eaeb",
    measurementId: "G-5X3TPQWCNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);