// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBPndCB5o06xk8mF_WIXe50mXXeyAvnso",
  authDomain: "chat-app-52e83.firebaseapp.com",
  projectId: "chat-app-52e83",
  storageBucket: "chat-app-52e83.appspot.com",
  messagingSenderId: "937612489818",
  appId: "1:937612489818:web:b2ab822954138898bc9463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const db = getFirestore(app);