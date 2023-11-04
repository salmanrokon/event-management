// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTs87LxYvzv8Rk-dz6R_dODoZ9-jyxY4",
  authDomain: "event-management-7e790.firebaseapp.com",
  projectId: "event-management-7e790",
  storageBucket: "event-management-7e790.appspot.com",
  messagingSenderId: "222962407135",
  appId: "1:222962407135:web:f49530cbd7410db903fb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
