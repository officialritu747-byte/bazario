let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart");
}

function buyNow(name, price) {
    alert("Buying " + name + " - $" + price);
}
let cart = [];

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
function placeOrder(event) {
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
