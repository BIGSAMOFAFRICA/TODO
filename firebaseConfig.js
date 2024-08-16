// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2iNqKPjOIRELwIlRFIFbiTEtXGQwIzlg",
  authDomain: "todo-c2d19.firebaseapp.com",
  projectId: "todo-c2d19",
  storageBucket: "todo-c2d19.appspot.com",
  messagingSenderId: "662340552264",
  appId: "1:662340552264:web:87bf790130b07e51d73a7d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail };
