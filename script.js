let cart = [];<span id="cart-count">0</span>
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
