// Import Firebase dependencies
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


//import { firebaseConfig } from './firebaseconfig';
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
// Function to fetch data from Firestore
export const fetchFirestoreData = async (collectionName) => {
  try {
    const colRef = collection(db, collectionName); // Get collection reference
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map through and return the data
  } catch (error) {
    console.error("Error fetching Firestore data:", error);
    return []; // Return an empty array on error
  }
};

// Function to fetch image URL from Firebase Storage
export const fetchStorageData = async (fileName) => {
  try {
    const storageRef = ref(storage, `images/${fileName}`); // Path to the images folder
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error fetching Cloud Storage data:", error);
    return null; // Return null on error
  }
};


export { db, storage };