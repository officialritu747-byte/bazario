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

loadProducts();

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

loadProducts();

}

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
