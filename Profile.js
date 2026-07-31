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
