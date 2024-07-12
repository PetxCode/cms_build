import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN7GlE_B0U1Dsxfgs1Ou6Bz-9NsFnuWRs",
  authDomain: "auth-read.firebaseapp.com",
  projectId: "auth-read",
  storageBucket: "auth-read.appspot.com",
  messagingSenderId: "883888065104",
  appId: "1:883888065104:web:ebe280ac9367090fa31f55",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
