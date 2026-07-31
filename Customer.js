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
// ===============================
// Cart System - Part 1
// ===============================

function addToCart(productId) {

    let products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    let cart =
        JSON.parse(localStorage.getItem("customerCart")) || [];

    const product = products.find(
        p => p.id === productId
    );

    if (!product) {
        alert("Product Not Found");
        return;
    }

    const exists = cart.find(
        item => item.id === productId
    );

    if (exists) {
        exists.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem(
        "customerCart",
        JSON.stringify(cart)
    );

    alert("Added To Cart");
}

function getCartItems() {

    return JSON.parse(
        localStorage.getItem("customerCart")
    ) || [];
}// ===============================
// Cart System - Part 2
// ===============================

function increaseQuantity(productId) {

    let cart = JSON.parse(localStorage.getItem("customerCart")) || [];

    cart.forEach(item => {
        if (item.id === productId) {
            item.quantity++;
        }
    });

    localStorage.setItem("customerCart", JSON.stringify(cart));
}

function decreaseQuantity(productId) {

    let cart = JSON.parse(localStorage.getItem("customerCart")) || [];

    cart.forEach(item => {
        if (item.id === productId && item.quantity > 1) {
            item.quantity--;
        }
    });

    localStorage.setItem("customerCart", JSON.stringify(cart));
}

function removeFromCart(productId) {

    let cart = JSON.parse(localStorage.getItem("customerCart")) || [];

    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem("customerCart", JSON.stringify(cart));
}

function getCartTotal() {

    let cart = JSON.parse(localStorage.getItem("customerCart")) || [];

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    return total;
}// ===============================
// Cart System - Part 3
// Place Order & Order History
// ===============================

function placeCustomerOrder() {

    const cart = JSON.parse(localStorage.getItem("customerCart")) || [];

    if (cart.length === 0) {
        alert("Cart is Empty");
        return false;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const order = {
        id: Date.now(),
        items: cart,
        total: getCartTotal(),
        status: "Pending",
        date: new Date().toLocaleString()
    };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("customerCart");

    alert("Order Placed Successfully");

    return order;
}

function getOrderHistory() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function clearCart() {
    localStorage.removeItem("customerCart");
}// ===============================
// Payment System - Part 1
// ===============================

function createPayment(method) {

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        alert("No Order Found");
        return false;
    }

    const lastOrder = orders[orders.length - 1];

    const payment = {
        id: Date.now(),
        orderId: lastOrder.id,
        method: method,
        amount: lastOrder.total,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    payments.push(payment);

    localStorage.setItem(
        "payments",
        JSON.stringify(payments)
    );

    return payment;
}

function paymentSuccess(paymentId) {

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    payments.forEach(payment => {
        if (payment.id === paymentId) {
            payment.status = "Success";
        }
    });

    localStorage.setItem(
        "payments",
        JSON.stringify(payments)
    );

    return true;
}

function paymentFailed(paymentId) {

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    payments.forEach(payment => {
        if (payment.id
            // ===============================
// Payment System - Part 2
// ===============================

function payWithCOD() {
    return createPayment("Cash On Delivery");
}

function payWithUPI(upiId) {

    const payment = createPayment("UPI");

    if (!payment) return false;

    payment.upiId = upiId;

    paymentSuccess(payment.id);

    return payment;
}

function payWithCard(cardHolder, last4Digits) {

    const payment = createPayment("Card");

    if (!payment) return false;

    payment.cardHolder = cardHolder;
    payment.cardLast4 = last4Digits;

    paymentSuccess(payment.id);

    return payment;
}

function getPaymentHistory() {

    return JSON.parse(
        localStorage.getItem("payments")
    ) || [];
}
