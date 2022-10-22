// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb1AKk84aVylNoG1VFvGC_gTH8YEFgzzg",
    authDomain: "world-news-d408b.firebaseapp.com",
    projectId: "world-news-d408b",
    storageBucket: "world-news-d408b.appspot.com",
    messagingSenderId: "543687358268",
    appId: "1:543687358268:web:4c4f950325d7eb2c9cd039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app