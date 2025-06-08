// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCakGacOd2oAbkPzQqtO4K4A7tOrkeDJSE",
  authDomain: "mkdocs-3ec9e.firebaseapp.com",
  projectId: "mkdocs-3ec9e",
  storageBucket: "mkdocs-3ec9e.firebasestorage.app",
  messagingSenderId: "842294278342",
  appId: "1:842294278342:web:9ec87d0c6578412a69ffc7",
  //   measurementId: "G-S2185VTHZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to get input values safely
function getInputValue(id) {
  return document.getElementById(id)?.value || ""; // Prevents null errors
}

// Signup function
export function signup() {
  let email = getInputValue("signup-email");
  let password = getInputValue("signup-password");

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful! Please login.");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login function
export function login() {
  let email = getInputValue("login-email");
  let password = getInputValue("login-password");

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sessionStorage.setItem("authenticated", "true");
      window.location.href = "index.html"; // Redirect to MkDocs homepage
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Logout function
export function logout() {
  signOut(auth).then(() => {
    sessionStorage.removeItem("authenticated");
    window.location.href = "auth.html"; // Redirect to login page
  });
}
