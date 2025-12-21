// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhH_bvUtQiOxvENXgh2Cin0fmMWsxi0z8",
  authDomain: "lite-584ca.firebaseapp.com",
  projectId: "lite-584ca",
  storageBucket: "lite-584ca.appspot.com", // fixed
  messagingSenderId: "861872738616",
  appId: "1:861872738616:web:8b086a791e3745e5f171cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
