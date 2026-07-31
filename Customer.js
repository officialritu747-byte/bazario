// ===============================
// Customer Engine
// ===============================

let customerCart = [];
let customerWishlist = [];

function getCustomer() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function addToCustomerCart(product) {

    customerCart.push(product);

    localStorage.setItem(
        "customerCart",
        JSON.stringify(customerCart)
    );

    alert("Product Added To Cart");
}

function loadCustomerCart() {

    customerCart =
        JSON.parse(localStorage.getItem("customerCart")) || [];

    return customerCart;
}

function removeFromCustomerCart(id) {

    customerCart =
        customerCart.filter(item => item.id !== id);

    localStorage.setItem(
        "customerCart",
        JSON.stringify(customerCart)
    );
}
