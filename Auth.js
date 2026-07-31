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
