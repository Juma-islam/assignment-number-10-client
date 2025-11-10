
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgeIrD0u0yP-6iJ7jr8IEq70qHMUtg6Vo",
  authDomain: "community-cleanliness-project.firebaseapp.com",
  projectId: "community-cleanliness-project",
  storageBucket: "community-cleanliness-project.firebasestorage.app",
  messagingSenderId: "996168780941",
  appId: "1:996168780941:web:516acf389627d1acfa66c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;