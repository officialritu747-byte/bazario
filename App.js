import { getAuth, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { app } from "./firebase-config.js";
const auth = getAuth(app);
import "./products.js";

import "./cart.js";
console.log("Bazario Started");
function signupUser() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    alert("Signup successful (Frontend Test)");
    console.log({
        name,
        email,
        password
    });

}
