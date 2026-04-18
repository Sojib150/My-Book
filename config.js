import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_TOgrehY8a5JD55FXHdRiFcZhHxctDkM",
  authDomain: "seen-a1d92.firebaseapp.com",
  databaseURL: "https://seen-a1d92-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "seen-a1d92",
  storageBucket: "seen-a1d92.appspot.com",
  messagingSenderId: "868584044532",
  appId: "1:868584044532:web:51f07436a883f88332eba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);