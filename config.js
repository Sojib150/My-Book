import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_TOgrehY8a5JD55FXHdRiFcZhHxctDkM",
  authDomain: "seen-a1d92.firebaseapp.com",
  projectId: "seen-a1d92",
  storageBucket: "seen-a1d92.firebasestorage.app",
  messagingSenderId: "868584044532",
  appId: "1:868584044532:web:51f07436a883f88332eba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Elite Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
