// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv_IU1Oz68eMtwYXJIe25VjTJm3y30s1E",
  authDomain: "react-dragon-project.firebaseapp.com",
  projectId: "react-dragon-project",
  storageBucket: "react-dragon-project.appspot.com",
  messagingSenderId: "432144590580",
  appId: "1:432144590580:web:7c0d723a9bbd1bab81a0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default auth = getAuth(app)