// Import Firebase core
import { initializeApp } from "firebase/app";

// Services you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // optional

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyC7GN_fSnQodtZ7KV7bjbyZRKaN2XnfvBc",
  authDomain: "jayarani-dfe1f.firebaseapp.com",
  projectId: "jayarani-dfe1f",
  storageBucket: "jayarani-dfe1f.firebasestorage.app",
  messagingSenderId: "374234350581",
  appId: "1:374234350581:web:831ebb94ca33a1a81d96bc",
  measurementId: "G-EV33Y53XYB"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Optional (only if needed)
// export const analytics = getAnalytics(app);