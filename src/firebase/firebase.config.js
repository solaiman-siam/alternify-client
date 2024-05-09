// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJOLMHKXFFKTaXQrw1HHp-5GxPKx2Cws",
  authDomain: "alternify-15eba.firebaseapp.com",
  projectId: "alternify-15eba",
  storageBucket: "alternify-15eba.appspot.com",
  messagingSenderId: "42291911642",
  appId: "1:42291911642:web:44b3f7fcc1e68f05d93ee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
