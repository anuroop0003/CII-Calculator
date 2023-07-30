import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDu1UvAmzBH1r5xHJ7L-EMfRxxsa6aspo4",
  authDomain: "cii-calculator-6f062.firebaseapp.com",
  projectId: "cii-calculator-6f062",
  storageBucket: "cii-calculator-6f062.appspot.com",
  messagingSenderId: "384348840897",
  appId: "1:384348840897:web:9c2c0f854f9b0b6c6d4540",
  measurementId: "G-PQMGL25L7Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
// console.log("analytics", analytics);
export { auth, provider };
