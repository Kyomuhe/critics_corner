// Import Firebase dependencies
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration (Replace these fields with your config values)
const firebaseConfig = {
  apiKey: "AIzaSyAWJ1VyTw079FLtTDOaC-ToK9ss1Rmidtk",
  authDomain: "critics-corner-35738.firebaseapp.com",
  projectId: "critics-corner-35738",
  storageBucket: "critics-corner-35738.appspot.com",
  messagingSenderId: "1007284689570",
  appId: "1:1007284689570:web:a2c45870c34a81271355fb"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage services
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };