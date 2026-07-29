// Add To Cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Search Products
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const name = product.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Load Cart
function loadCart() {
    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="product">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    const totalPrice = document.getElementById("totalPrice");
    if (totalPrice) {
        totalPrice.innerText = "Total: ₹" + total;
    }
}

// Remove Item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// Checkout
function checkout() {
    alert("Order Placed Successfully!");

    localStorage.removeItem("cart");

    loadCart();
}

// Auto Load Cart
window.onload = loadCart;
function loadCart() {
    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="product">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>`;
    });

    document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

function checkout() {
    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    loadCart();
}

window.onload = loadCart;
function login(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email===""||password===""){
alert("Please fill all fields");
return;
}

alert("Login Successful!");

window.location.href="index.html";

}
function signup(){

let name=document.getElementById("name").value;
let email=document.getElementById("signupEmail").value;
let password=document.getElementById("signupPassword").value;

if(name===""||email===""||password===""){
alert("Please fill all fields");
return;
}

localStorage.setItem("user",JSON.stringify({
name:name,
email:email,
password:password
}));

alert("Account Created Successfully!");

window.location.href="login.html";

}
function placeOrder(){

let fullname=document.getElementById("fullname").value;
let address=document.getElementById("address").value;
let phone=document.getElementById("phone").value;
let payment=document.getElementById("payment").value;

if(fullname===""||address===""||phone===""||payment===""){
alert("Please fill all details");
return;
}

alert("🎉 Order Placed Successfully!");

localStorage.removeItem("cart");

window.location.href="index.html";

}
function sendMessage(){

let name=document.getElementById("contactName").value;
let email=document.getElementById("contactEmail").value;
let message=document.getElementById("message").value;

if(name===""||email===""||message===""){
alert("Please fill all fields");
return;
}

alert("Message Sent Successfully!");

window.location.reload();

}
