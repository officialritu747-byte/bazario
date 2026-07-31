// ===============================
// Bazario Admin Panel
// ===============================

function dashboardStats() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    console.log("Users :", users.length);
    console.log("Products :", products.length);
    console.log("Orders :", orders.length);
}

dashboardStats();
// ===============================
// Admin Engine
// ===============================

let adminData = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    sellers: JSON.parse(localStorage.getItem("sellers")) || [],
    products: JSON.parse(localStorage.getItem("sellerProducts")) || [],
    orders: JSON.parse(localStorage.getItem("orders")) || []
};

function getAdminDashboard() {
    return {
        totalUsers: adminData.users.length,
        totalSellers: adminData.sellers.length,
        totalProducts: adminData.products.length,
        totalOrders: adminData.orders.length
    };
}

function approveSeller(sellerId) {
    const seller = adminData.sellers.find(s => s.id === sellerId);

    if (!seller) return false;

    seller.status = "Approved";

    localStorage.setItem(
        "sellers",
        JSON.stringify(adminData.sellers)
    );

    return true;
}

function removeProduct(productId) {
    adminData.products =
        adminData.products.filter(
            p => p.id !== productId
        );

    localStorage.setItem(
        "sellerProducts",
        JSON.stringify(adminData.products)
    );

    return true;
}

function removeUser(userId) {
    adminData.users =
        adminData.users.filter(
            u => u.id !== userId
        );

    localStorage.setItem(
        "users",
        JSON.stringify(adminData.users)
    );

    return true;
}
function loadOrders() {

    db.collection("orders")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => {

        let html = "";

        snapshot.forEach((doc) => {

            const order = doc.data();

            html += `
            <div class="card">
                <h3>${order.customerName}</h3>
                <p>📞 ${order.phone}</p>
                <p>📍 ${order.address}</p>
                <p>Status: ${order.status}</p>
            </div>
            `;
        });

        document.getElementById("ordersList").innerHTML = html;

    });

}

loadOrders();
