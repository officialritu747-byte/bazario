// ===============================
// Bazario Authentication System
// ===============================

let currentUser = null;

// Signup
function signupUser(name, email, password, role = "customer") {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.email === email);

    if (exists) {
        alert("Email already registered!");
        return false;
    }

    const user = {
        id: Date.now(),
        name,
        email,
        password,
        role,
        createdAt: new Date().toISOString()
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");
    return true;
}

// Login
function loginUser(email, password) {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid Email or Password");
        return false;
    }

    currentUser = user;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    alert("Login Successful!");

    return true;
}
// ===============================
// Authentication Part 2
// ===============================

// Logout
function logoutUser() {
    localStorage.removeItem("currentUser");
    currentUser = null;
    window.location.href = "login.html";
}

// Current User
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

// Login Check
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Role Check
function hasRole(role) {
    const user = getCurrentUser();

    if (!user) return false;

    return user.role === role;
}

// Protect Page
function requireLogin() {
    if (!isLoggedIn()) {
        alert("Please Login First");
        window.location.href = "login.html";
    }
}

// Admin Only
function requireAdmin() {
    if (!hasRole("admin")) {
        alert("Access Denied");
        window.location.href = "index.html";
    }
}

// Seller Only
function requireSeller() {
    if (!hasRole("seller")) {
        alert("Seller Login Required");
        window.location.href = "index.html";
    }
}
