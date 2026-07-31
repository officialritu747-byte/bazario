// import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";Global Data

let products = [];
let cart = [];
let orders = [];
let users = [];
let sellers = [];
let wishlist = [];
// ===============================
// Seller Engine
// ===============================

function createSeller(name, shopName, phone, address) {
    const seller = {
        id: Date.now(),
        name,
        shopName,
        phone,
        address,
        products: [],
        status: "active"
    };

    sellers.push(seller);
    return seller;
}

function getSeller(id) {
    return sellers.find(seller => seller.id === id);
}

function addProductToSeller(sellerId, product) {
    const seller = getSeller(sellerId);

    if (!seller) {
        return false;
    }

    seller.products.push(product);
    products.push(product);

    return true;
}// ===============================
// Customer Engine
// ===============================

function createCustomer(name, email) {
    const customer = {
        id: Date.now(),
        name,
        email,
        cart: [],
        wishlist: [],
        orders: []
    };

    users.push(customer);
    return customer;
}

function addToCart(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    customer.cart.push(product);
    return true;
}

function removeFromCart(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.cart = customer.cart.filter(
        item => item.id !== productId
    );

    return true;
}

function getCart(customerId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return [];
    }

    return customer.cart;
}// ===============================
// Order Engine
// ===============================

function placeOrder(customerId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer || customer.cart.length === 0) {
        return false;
    }

    const order = {
        id: Date.now(),
        customerId: customer.id,
        items: [...customer.cart],
        total: customer.cart.reduce(
            (sum, item) => sum + Number(item.price || 0),
            0
        ),
        status: "Pending",
        createdAt: new Date()
    };

    orders.push(order);
    customer.orders.push(order);
    customer.cart = [];

    return order;
}

function getOrders(customerId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return [];
    }

    return customer.orders;
}

function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return false;
    }

    order.status = status;
   // ===============================
// Delivery Engine
// ===============================

let deliveryPartners = [];

function addDeliveryPartner(name, phone) {
    const partner = {
        id: Date.now(),
        name,
        phone,
        status: "Available",
        currentOrder: null
    };

    deliveryPartners.push(partner);
    return partner;
}

function assignDelivery(orderId, partnerId) {
    const order = orders.find(o => o.id === orderId);
    const partner = deliveryPartners.find(p => p.id === partnerId);

    if (!order || !partner) {
        return false;
    }

    order.deliveryPartner = partner.id;
    order.status = "Out for Delivery";

    partner.currentOrder = order.id;
    partner.status = "Busy";

    return true;
}

function completeDelivery(orderId) {
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return false;
    }

    order.status = "Delivered";

    const partner = deliveryPartners.find(
        p => p.id === order.deliveryPartner
    );

    if (partner) {
        partner.status = "Available";
        partner.currentOrder = null;
    }

    return true;
} return true;
}// ===============================
// Payment Engine
// ===============================

let payments = [];

function createPayment(orderId, method) {
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return false;
    }

    const payment = {
        id: Date.now(),
        orderId: order.id,
        amount: order.total,
        method: method,
        status: "Pending",
        createdAt: new Date()
    };

    payments.push(payment);
    return payment;
}

function completePayment(paymentId) {
    const payment = payments.find(p => p.id === paymentId);

    if (!payment) {
        return false;
    }

    payment.status = "Success";

    const order = orders.find(o => o.id === payment.orderId);

    if (order) {
        order.status = "Paid";
    }

    return true;
}

function getPayment(paymentId) {
    return payments.find(p => p.id === paymentId);
}
impor// ===============================
// Notification Engine
// ===============================

let notifications = [];

function sendNotification(userId, title, message) {
    const notification = {
        id: Date.now(),
        userId,
        title,
        message,
        isRead: false,
        createdAt: new Date()
    };

    notifications.push(notification);
    return notification;
}

function getNotifications(userId) {
    return notifications.filter(
        n => n.userId === userId
    );
}

function markNotificationAsRead(notificationId) {
    const notification = notifications.find(
        n => n.id === notificationId
    );

    if (!notification) {
        return false;
    }

    notification.isRead = true;
    return true;
}// ===============================
// Admin Control Engine
// ===============================

const admin = {
    products,
    users,
    sellers,
    orders,
    payments
};

function getAllProducts() {
    return admin.products;
}

function getAllUsers() {
    return admin.users;
}

function getAllSellers() {
    return admin.sellers;
}

function getAllOrders() {
    return admin.orders;
}

function deleteProduct(productId) {
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return false;
    }

    products.splice(index, 1);
    return true;
}

function deleteUser(userId) {
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return false;
    }

    users.splice(index, 1);
    return true;
}

function blockSeller(sellerId) {
    const seller = sellers.find(s => s.id === sellerId);

    if (!seller) {
        return false;
    }
// ===============================
// Product Engine
// ===============================

function createProduct(name, price, image, category, sellerId) {
    const product = {
        id: Date.now(),
        name,
        price,
        image,
        category,
        sellerId,
        rating: 0,
        stock: 100,
        status: "Active"
    };

    products.push(product);
    return product;
}

function getProduct(productId) {
    return products.find(product => product.id === productId);
}

function updateProduct(productId, data) {
    const product = getProduct(productId);

    if (!product) return false;

    Object.assign(product, data);
    return true;
}

function deleteProductById(productId) {
    const index = products.findIndex(
        product => product.id === productId
    );

    if (index === -1) return false;

    products.splice(index, 1);
    return true;
}
    seller.status = "Blocked";
    return true;
}
t { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const db = getFirestore();

async function loadFirebaseProducts() {
  const productsBox = document.getElementById("products");
  if (!productsBox) return;

  const snapshot = await getDocs(collection(db, "products"));

  let output = "";

  snapshot.forEach((doc) => {
    const item = doc.data();

    output += `
      <div class="product">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
      </div>
    `;
  });

  productsBox.innerHTML = output;
}

loadFirebaseProducts();
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
function addProduct(){

let name=document.getElementById("productName").value;
let price=document.getElementById("productPrice").value;
let image=document.getElementById("productImage").value;

if(name===""||price===""||image===""){
alert("Fill all fields");
return;
}

let products=JSON.parse(localStorage.getItem("products"))||[];

products.push({
name:name,
price:price,
image:image
});

localStorage.setItem("products",JSON.stringify(products));

alert("Product Added Successfully!");

showAdminProducts();


  

}

function loadProducts(){

let products=JSON.parse(localStorage.getItem("products"))||[];

let output="";

products.forEach((item,index)=>{

output+=`
<div class="product">
<img src="${item.image}" width="150">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="deleteProduct(${index})">
Delete
</button>
</div>
`;

});

let box=document.getElementById("adminProducts");

if(box){
box.innerHTML=output;
}

}

function deleteProduct(index){

let products=JSON.parse(localStorage.getItem("products"))||[];

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));
showAdminProducts();
}
window.onload = loadProducts;

window.onload=loadProducts;
// Product Search
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (name.indexOf(input) > -1) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}
// Load Cart

function loadCart() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output = "";

let total = 0;

cart.forEach(function(item){

output += `
<div class="product">
<img src="https://picsum.photos/200?random=${item.name}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="removeFromCart('${item.name}')">
Remove
</button>
</div>
`;

total += item.price;

});

let cartItems = document.getElementById("cartItems");

if(cartItems){

cartItems.innerHTML = output;

document.getElementById("total").innerText = total;

}

}

// Remove Product

function removeFromCart(name){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart = cart.filter(item => item.name !== name);

localStorage.setItem("cart", JSON.stringify(cart));

loadCart();

}

// Checkout

function checkout(){

alert("Order Placed Successfully 🎉");

localStorage.removeItem("cart");

loadCart();

}

// Auto Load Cart

loadCart();
// Add To Wishlist
function addToWishlist(name, price) {

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.push({
name:name,
price:price
});

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert("Added to Wishlist ❤️");

}

// Load Wishlist
function loadWishlist(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let output = "";

wishlist.forEach(function(item){

output += `
<div class="product">
<img src="https://picsum.photos/200?random=${item.name}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>

<button onclick="addToCart('${item.name}',${item.price})">
Add to Cart
</button>

<button onclick="removeWishlist('${item.name}')">
Remove
</button>

</div>
`;

});

let box = document.getElementById("wishlistItems");

if(box){
box.innerHTML = output;
}

}

// Remove Wishlist
function removeWishlist(name){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist = wishlist.filter(item => item.name !== name);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

loadWishlist();

}

loadWishlist();
function loginUser(){

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let user=JSON.parse(localStorage.getItem("user"));

if(!user){
alert("No account found!");
return;
}

if(email===user.email && password===user.password){
alert("Login Successful!");
window.location.href="index.html";
}else{
alert("Invalid Email or Password");
}

}
function signupUser(){

let name=document.getElementById("signupName").value;
let email=document.getElementById("signupEmail").value;
let password=document.getElementById("signupPassword").value;
let confirm=document.getElementById("confirmPassword").value;

if(name===""||email===""||password===""||confirm===""){
alert("Please fill all fields");
return;
}

if(password!==confirm){
alert("Passwords do not match");
return;
}

let user={
name:name,
email:email,
password:password
};

localStorage.setItem("user",JSON.stringify(user));

alert("Account Created Successfully!");

window.location.href="login.html";

}
function addProduct(){

let name=document.getElementById("productName").value;
let price=document.getElementById("productPrice").value;
let image=document.getElementById("productImage").value;

if(name===""||price===""||image===""){
alert("Fill all fields");
return;
}

let products=JSON.parse(localStorage.getItem("products"))||[];

products.push({
name:name,
price:price,
image:image
});

localStorage.setItem("products",JSON.stringify(products));

alert("Product Added Successfully!");

showAdminProducts();

}

function showAdminProducts(){

let products=JSON.parse(localStorage.getItem("products"))||[];

let output="";

products.forEach((item,index)=>{

output+=`
<div class="product">
<img src="${item.image}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="deleteProduct(${index})">Delete</button>
</div>
`;

});

let box=document.getElementById("adminProducts");

if(box){
box.innerHTML=output;
}

}

function deleteProduct(index){

let products=JSON.parse(localStorage.getItem("products"))||[];

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

showAdminProducts();

}

showAdminProducts();
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const db = getFirestore(app);

async function loadFirebaseProducts() {
    const productsBox = document.getElementById("products");

    if (!productsBox) return;

    productsBox.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {
        const item = doc.data();

        productsBox.innerHTML += `
        <div class="product">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button onclick="addToCart('${item.name}', ${item.price})">
                Add to Cart
            </button>

            <button onclick="addToWishlist('${item.name}', ${item.price})">
                ❤️ Wishlist
            </button>
        </div>
        `;
    });
}

loadFirebaseProducts();
async function loadProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });const product = doc.data();

document.getElementById("products").innerHTML += `
<div class="product">
    <img src="${product.image}" width="120">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button>Add to Cart</button>
</div>
`;
}console.log("Firebase Products Loaded Successfully");

loadProducts();
async function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;
  const category = document.getElementById("productCategory").value;
window.addProduct = addProduct;
  await addDoc(collection(db, "products"), {
    name,
    price,
    image,
    category
  });

  alert("Product Added Successfully!");
console.log("Product uploaded to Firebase successfully.");
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productCategory").value = "";

  loadFirebaseProducts();
}
function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function sortProducts() {
  const container = document.getElementById("products");
  const products = Array.from(container.querySelectorAll(".product"));
  const order = document.getElementById("sortPrice").value;

  products.sort((a, b) => {
    const priceA = parseInt(a.querySelector("p").innerText.replace("₹", ""));
    const priceB = parseInt(b.querySelector("p").innerText.replace("₹", ""));

    return order === "low" ? priceA - priceB : priceB - priceA;
  });

  products.forEach(product => container.appendChild(product));
}// ===============================
// Search Engine
// ===============================
// ===============================
// Wishlist Engine
// ===============================

function addToWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    if (!customer.wishlist.find(p => p.id === productId)) {
        customer.wishlist.push(product);
    }

    return true;
}

function removeFromWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.wishlist = customer.wishlist.filter(
        p => p.id !== productId
    );

    return true;
}

function getWishlist(customerId) {
    const customer = users.find(u => u.id === customerId);

    return customer ? customer.wishlist : [];
}// ===============================
// Wishlist Engine
// ===============================

function addToWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    if (!customer.wishlist.find(p => p.id === productId)) {
        customer.wishlist.push(product);
    }

    return true;
}

function removeFromWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.wishlist = customer.wishlist.filter(
        p => p.id !== productId
    );

    return true;
}

function getWishlist(customerId) {
    const customer = users.find(u => u.id === customerId);

    return customer ? customer.wishlist : [];
}
function searchProducts(keyword) {
    return products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

function filterByCategory(category) {
    return products.filter(product =>
        product.category === category
    );
}

function sortByPriceLowToHigh() {
    return [...products].sort((a, b) => a.price - b.price);
}

function sortByPriceHighToLow() {
    return [...products].sort((a, b) => b.price - a.price);
}// ===============================
// Wishlist Engine
// ===============================

function addToWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    if (!customer.wishlist.find(p => p.id === productId)) {
        customer.wishlist.push(product);
    }

    return true;
}

function removeFromWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.wishlist = customer.wishlist.filter(
        p => p.id !== productId
    );

    return true;
}

function getWishlist(customerId) {
    const customer = users.find(u => u.id === customerId);

    return customer ? customer.wishlist : [];
}// ===============================
// Wishlist Engine
// ===============================

function addToWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    if (!customer.wishlist.find(p => p.id === productId)) {
        customer.wishlist.push(product);
    }

    return true;
}

function removeFromWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.wishlist = customer.wishlist.filter(
        p => p.id !== productId
    );

    return true;
}

function getWishlist(customerId) {
    const customer = users.find(u => u.id === customerId);

    return customer ? customer.wishlist : [];
}// ===============================
// Wishlist Engine
// ===============================

function addToWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);
    const product = products.find(p => p.id === productId);

    if (!customer || !product) {
        return false;
    }

    if (!customer.wishlist.find(p => p.id === productId)) {
        customer.wishlist.push(product);
    }

    return true;
}

function removeFromWishlist(customerId, productId) {
    const customer = users.find(u => u.id === customerId);

    if (!customer) {
        return false;
    }

    customer.wishlist = customer.wishlist.filter(
        p => p.id !== productId
    );

    return true;
}

function getWishlist(customerId) {
    const customer = users.find(u => u.id === customerId);

    return customer ? customer.wishlist : [];
}
