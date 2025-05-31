// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD79ph2q9CGN2z1Y0QIWBWl57sIuzOntSc",
    authDomain: "autentificador-f9bf4.firebaseapp.com",
    projectId: "autentificador-f9bf4",
    storageBucket: "autentificador-f9bf4.firebasestorage.app",
    messagingSenderId: "90390164706",
    appId: "1:90390164706:web:9de1b0c873710a4ecb1abb",
    measurementId: "G-29WTWEZQVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);