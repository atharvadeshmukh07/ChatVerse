import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv_LCHL3T0Gd-1Ft-3G0kC_qon0Bxs5YI",
  authDomain: "reactchatapp-4d50d.firebaseapp.com",
  projectId: "reactchatapp-4d50d",
  storageBucket: "reactchatapp-4d50d.appspot.com",
  messagingSenderId: "1098061115222",
  appId: "1:1098061115222:web:a31bd216c827ee53d3b0f7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
