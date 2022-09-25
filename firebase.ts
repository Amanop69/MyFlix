// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHo_gtwJ-DnJ1ygyIgCF0T1jCR2uSY_eM",
    authDomain: "netflix-clone-7e956.firebaseapp.com",
    projectId: "netflix-clone-7e956",
    storageBucket: "netflix-clone-7e956.appspot.com",
    messagingSenderId: "931167743026",
    appId: "1:931167743026:web:011536a79b1dc4d4d8a02b"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }