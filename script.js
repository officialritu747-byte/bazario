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
