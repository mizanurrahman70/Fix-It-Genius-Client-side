// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwrrYaAS9-kBMnTIQw_WBE30mM1sVhos",
  authDomain: "eleven-daeee.firebaseapp.com",
  projectId: "eleven-daeee",
  storageBucket: "eleven-daeee.appspot.com",
  messagingSenderId: "952991648233",
  appId: "1:952991648233:web:b43a4960cbe4608382e378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth