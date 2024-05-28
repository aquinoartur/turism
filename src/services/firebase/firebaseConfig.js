import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
 apiKey: "AIzaSyArTN5cTAGF9mIF8SDLJvDZizkYv2Uh4F8",
 authDomain: "city-tour-test.firebaseapp.com",
 projectId: "city-tour-test",
 storageBucket: "city-tour-test.appspot.com",
 messagingSenderId: "188964698780",
 appId: "1:188964698780:web:bee212328871bf91600b59",
 measurementId: "G-BSJ5QWK9NJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);