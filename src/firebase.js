// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKd5D3xLXbHaEzEx2QGEP-oVJK_9w4hI",
  authDomain: "auth-firebase-8a941.firebaseapp.com",
  projectId: "auth-firebase-8a941",
  storageBucket: "auth-firebase-8a941.appspot.com",
  messagingSenderId: "877323268732",
  appId: "1:877323268732:web:812f1fd907d802d4c30ff9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
