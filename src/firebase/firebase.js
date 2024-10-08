import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiRCYusBktuER4bJ-eUjenrzflzbtBf1w",
  authDomain: "toys-68c8e.firebaseapp.com",
  projectId: "toys-68c8e",
  storageBucket: "toys-68c8e.appspot.com",
  messagingSenderId: "80358797720",
  appId: "1:80358797720:web:6350d777d2ffbc47d1fbed",
  measurementId: "G-8E32QS4PG8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore(app)




export { app, auth };
