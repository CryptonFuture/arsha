import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBg75ct5RHhf95o6K6AqOXjXSVtxyxyPm4",
    authDomain: "coweb-3b6fa.firebaseapp.com",
    projectId: "coweb-3b6fa",
    storageBucket: "coweb-3b6fa.firebasestorage.app",
    messagingSenderId: "911003307606",
    appId: "1:911003307606:web:bfda1be62bc673986ab5f7",
    measurementId: "G-4X5Y6P2K45"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);