// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzAkFZCALk96ngCmC9u6Wbns3IFoMVCPI",
  authDomain: "auto-wheel.firebaseapp.com",
  projectId: "auto-wheel",
  storageBucket: "auto-wheel.firebasestorage.app",
  messagingSenderId: "56170845456",
  appId: "1:56170845456:web:ddc0031ddc4e99414c0195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {storage, db };