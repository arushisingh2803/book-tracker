// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5GivRLDtj_a-YazHsM2po1Y5ndzW5lHA",
  authDomain: "pantry-management-f33f0.firebaseapp.com",
  projectId: "pantry-management-f33f0",
  storageBucket: "pantry-management-f33f0.appspot.com",
  messagingSenderId: "551133905268",
  appId: "1:551133905268:web:8e31488c5f8ba922122c21",
  measurementId: "G-DHBNS5PD71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };