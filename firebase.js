import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyD5GivRLDtj_a-YazHsM2po1Y5ndzW5lHA",
 authDomain: "pantry-management-f33f0.firebaseapp.com",
 projectId: "pantry-management-f33f0",
 storageBucket: "pantry-management-f33f0.appspot.com",
 messagingSenderId: "551133905268",
 appId: "1:551133905268:web:8e31488c5f8ba922122c21"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };