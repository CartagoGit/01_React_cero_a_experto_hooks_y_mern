import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCCJGXHEAUpxBU2IJdbnicEt0ZaarGNyPA",
	authDomain: "curso-react-app-c78ab.firebaseapp.com",
	projectId: "curso-react-app-c78ab",
	storageBucket: "curso-react-app-c78ab.appspot.com",
	messagingSenderId: "205217762655",
	appId: "1:205217762655:web:6115cc48a2a8819da93aea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { firebaseApp, googleProvider, db };
