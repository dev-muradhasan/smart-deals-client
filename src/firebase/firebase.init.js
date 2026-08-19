
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFDreBlxGreRD5xLUpH7zuTcQFvnj2Irc",
    authDomain: "smart-deals-bcc99.firebaseapp.com",
    projectId: "smart-deals-bcc99",
    storageBucket: "smart-deals-bcc99.firebasestorage.app",
    messagingSenderId: "1036819681328",
    appId: "1:1036819681328:web:484da89b69f13c6ff49df5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);