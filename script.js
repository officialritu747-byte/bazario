let cart = [];
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
