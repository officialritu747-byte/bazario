let cart = [];<span id="cart-count">0</span><div class="cart">const totalPrice = document.getElementById("total-price");
<button id="checkout-btn">Checkout</button>
function displayCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
  });

  totalPrice.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  displayCart();
}
    <h2>Shopping Cart</h2>
    <ul id="cart-items"></ul>
</div>
function editProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    let newName = prompt("Enter New Product Name", products[index].name);
    let newPrice = prompt("Enter New Price", products[index].price);
    let newImage = prompt("Enter New Image URL", products[index].image);

    if (newName && newPrice && newImage) {
        products[index].name = newName;
        products[index].price = newPrice;
        products[index].image = newImage;

        localStorage.setItem("products", JSON.stringify(products));

        alert("Product Updated Successfully!");
        location.reload();
    }
}
function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart");
}

function buyNow(name, price) {
    alert("Buying " + name + " - $" + price);
}
let cart = [];
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    location.reload();
}
function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart");
}

function buyNow(name, price) {
    alert("Buying " + name + " - $" + price);
}
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}
if (document.getElementById("cartItems")) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let output = "";
    let total = 0;

    cart.forEach((item, index) => {
    output += `
        <div class="product">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        </div>
    `;

    total += Number(item.price);
});

    document.getElementById("cartItems").innerHTML = output;
    document.getElementById("total").innerHTML = "Total: ₹" + total;
}
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}
function placeOrder(event) {let orders = JSON.parse(localStorage.getItem("orders")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

orders.push({
    date: new Date().toLocaleString(),
    items: cart
});

localStorage.setItem("orders", JSON.stringify(orders));
    event.preventDefault();

    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");

    window.location.href = "success.html";
}
function addProduct() {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let product = {
        name: document.getElementById("productName").value,
        price: document.getElementById("productPrice").value,
        image: document.getElementById("productImage").value
    };
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    cart.push(products[index]);
    updateCartCount();
    displayCart();
    alert(products[index].name + " added to cart!");
  });
});
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added!");

    location.reload();
}
function searchProducts() {

    let input = document.getElementById("search").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
function addToWishlist(name, price, image) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(name + " added to Wishlist!");
}
if (document.getElementById("wishlistItems")) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let output = "";

    wishlist.forEach((item, index) => {

        output += `
            <div class="product">
                <img src="${item.image}" width="100">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <button onclick="removeWishlist(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("wishlistItems").innerHTML = output;
}function removeWishlist(index) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    location.reload();
}
function rateProduct(name, rating) {

    let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

    ratings[name] = rating;

    localStorage.setItem("ratings", JSON.stringify(ratings));

    alert("Thanks! You rated " + name + " " + rating + " stars.");
}
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Username or Password!");
    }
}
function signup() {

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");

    window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem("loggedIn");
    alert("Logged Out Successfully!");
    window.location.href = "login.html";
}
if (document.getElementById("welcome")) {
    let username = localStorage.getItem("username");

    if (username) {
        document.getElementById("welcome").innerHTML =
            "Welcome, " + username + " 👋";
    }
}
if (document.getElementById("orders")) {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let output = "";

    orders.forEach(order => {

        output += `
            <div class="product">
                <h3>Order Date: ${order.date}</h3>
        `;

        order.items.forEach(item => {
            output += `
                <p>${item.name} - ₹${item.price}</p>
            `;
        });

        output += `<hr></div>`;
    });

    document.getElementById("orders").innerHTML = output;
}
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "images/headphone.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "images/watch.jpg"
  },
  {
    id: 3,
    name: "Sports Shoes",
    price: 1999,
    image: "images/shoes.jpg"
  }
];

const productContainer = document.getElementById("product-list");

products.forEach(product => {
  productContainer.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});
let cart = [];

const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  cartCount.textContent = cart.length;
}

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    cart.push(products[index]);
    updateCartCount();
    alert(products[index].name + " added to cart!");
  });
});
const cartItems = document.getElementById("cart-items");

function displayCart() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    cartItems.innerHTML += `
      <li>${item.name} - ₹${item.price}</li>
    `;
  });
}
const totalPrice = document.getElementById("total-price");

function displayCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
  });

  totalPrice.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  displayCart();
}
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Order placed successfully! Thank you for shopping with Bazario.");

  cart = [];
  updateCartCount();
  displayCart();
});
.hero{
    height:80vh;
    background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),
    url("images/banner.jpg");
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
}

.hero-content h1{
    font-size:55px;
    margin-bottom:15px;
}

.hero-content p{
    font-size:22px;
    margin-bottom:20px;
}

.hero-content button{
    padding:15px 35px;
    background:#ff6600;
    color:white;
    border:none;
    border-radius:8px;
    font-size:18px;
    cursor:pointer;
}

.hero-content button:hover{
    background:#e65c00;
}
.categories{
    padding:60px 20px;
    text-align:center;
}

.category-container{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
    margin-top:30px;
}

.category-card{
    width:180px;
    background:#fff;
    padding:20px;
    border-radius:10px;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
    transition:0.3s;
    cursor:pointer;
}

.category-card:hover{
    transform:translateY(-8px);
}

.category-card img{
    width:100px;
    height:100px;
    object-fit:contain;
}

.category-card h3{
    margin-top:15px;
}
.featured-products{
    padding:60px 20px;
    background:#f8f8f8;
}

.featured-products h2{
    text-align:center;
    margin-bottom:30px;
}

.products-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.product-card{
    background:#fff;
    padding:20px;
    border-radius:12px;
    text-align:center;
    box-shadow:0 4px 12px rgba(0,0,0,0.1);
    transition:.3s;
}

.product-card:hover{
    transform:translateY(-8px);
}

.product-card img{
    width:100%;
    height:180px;
    object-fit:contain;
}

.price{
    color:#ff6600;
    font-size:22px;
    font-weight:bold;
    margin:10px 0;
}

.product-card button{
    width:100%;
    padding:12px;
    background:#ff6600;
    color:#fff;
    border:none;
    border-radius:8px;
    cursor:pointer;
      }
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
    }
