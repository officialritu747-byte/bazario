// ===============================
// Bazario Profile System
// ===============================

let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

function loadProfile() {

    document.getElementById("profileName").value =
        currentUser.name || "";

    document.getElementById("profileEmail").value =
        currentUser.email || "";

    document.getElementById("profilePhone").value =
        currentUser.phone || "";

    document.getElementById("profileAddress").value =
        currentUser.address || "";
}

function saveProfile() {

    currentUser.name =
        document.getElementById("profileName").value;

    currentUser.email =
        document.getElementById("profileEmail").value;

    currentUser.phone =
        document.getElementById("profilePhone").value;

    currentUser.address =
        document.getElementById("profileAddress").value;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser
function saveProfile() {

    const user = {
        name: document.getElementById("profileName").value,
        email: document.getElementById("profileEmail").value,
        phone: document.getElementById("profilePhone").value,
        address: document.getElementById("profileAddress").value
    };

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Profile Saved Successfully");
}

window.onload = function () {

    const user =
        JSON.parse(localStorage.getItem("currentUser")) || {};

    document.getElementById("profileName").value =
        user.name || "";

    document.getElementById("profileEmail").value =
        user.email || "";

    document.getElementById("profilePhone").value =
        user.phone || "";

    document.getElementById("profileAddress").value =
        user.address || "";
};
