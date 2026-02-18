// js/services/auth-service.js
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "../core/firebase-init.js";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Authenticated:", result.user.displayName);
        window.location.href = "dashboard.html"; // Move to the game lobby
    } catch (error) {
        console.error("Auth Error:", error);
        alert("Login Failed: " + error.message);
    }
};

export const logout = () => signOut(auth).then(() => window.location.href = "index.html");
