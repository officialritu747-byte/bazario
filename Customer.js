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
// ===============================
// Checkout System
// ===============================

function checkoutCustomer() {

    customerCart = loadCustomerCart();

    if (customerCart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    let total = 0;

    customerCart.forEach(item => {
        total += item.price;
    });

    const order = {
        id: Date.now(),
        customer: getCustomer()?.name || "Guest",
        items: customerCart,
        total: total,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("customerCart");
    customerCart = [];

    alert("Order Placed Successfully");
}// ===============================
// Order Tracking
// ===============================

function getCustomerOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function trackOrder(orderId) {

    const orders = getCustomerOrders();

    const order = orders.find(o => o.id === orderId);

    if (!order) {
        alert("Order Not Found");
        return null;
    }

    return order;
}

function updateTracking(orderId, status) {

    const orders = getCustomerOrders();

    const index = orders.findIndex(o => o.id === orderId);

    if (index === -1) {
        return false;
    }

    orders[index].status = status;

    localStorage.setItem("orders", JSON.stringify(orders));

    return true;
}
