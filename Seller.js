class Seller {
    constructor(
        sellerId,
        shopName,
        ownerName,
        email,
        phone,
        address
    ) {
        this.sellerId = sellerId;
        this.shopName = shopName;
        this.ownerName = ownerName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.status = "Pending";
        this.products = [];
        this.createdAt = new Date();
    }
}
const testSeller = new Seller(
    "SELLER001",
    "Gupta Kirana Store",
    "Ramesh Gupta",
    "gupta@example.com",
    "9876543210",
    "Main Market"
);

console.log(testSeller);
let sellerProducts = [];

function addProduct(product) {
    sellerProducts.push(product);

    console.log("Product Added Successfully");

    console.log(sellerProducts);
}
const rice = {
    id: "P001",
    name: "Basmati Rice",
    category: "Groceries",
    price: 599,
    stock: 50
};

addProduct(rice);
function showProducts() {

    document.getElementById("totalProducts").innerText =
        sellerProducts.length;

    let html = "";

    sellerProducts.forEach(product => {

        html += `
        <div>
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>Stock : ${product.stock}</p>
            <hr>
        </div>
        `;

    });

    document.getElementById("productList").innerHTML = html;

}
function deleteProduct(productId) {

    sellerProducts = sellerProducts.filter(product => product.id !== productId);

    showProducts();

    console.log("Product Deleted");

}function editProduct(productId, newPrice, newStock) {

    const product = sellerProducts.find(p => p.id === productId);

    if (product) {

        product.price = newPrice;
        product.stock = newStock;

        showProducts();

        console.log("Product Updated");
    }

}editProduct("P001", 549, 100);

// Delete test ke liye baad me use karna
// deleteProduct("P001");
function updateStock(productId, quantity) {

    const product = sellerProducts.find(p => p.id === productId);

    if (product) {

        product.stock = quantity;

        console.log("Stock Updated");

        showProducts();

    } else {

        console.log("Product Not Found");

    }

}function checkLowStock() {

    const lowStock = sellerProducts.filter(product => product.stock <= 5);

    console.log("Low Stock Products");

    console.log(lowStock);

}updateStock("P001", 3);

checkLowStock();
function addNewProduct() {

    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("productPrice").value);
    const stock = Number(document.getElementById("productStock").value);

    if (!name || !price || stock < 0) {
        alert("Please fill all fields correctly");
        return;
    }

    const product = {
        id: "P" + Date.now(),
        name: name,
        category: "General",
        price: price,
        stock: stock
    };

    sellerProducts.push(product);

    showProducts();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productStock").value = "";
}
function searchProduct() {

    const keyword = document
        .getElementById("searchProduct")
        .value
        .toLowerCase();

    const result = sellerProducts.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    let html = "";

    result.forEach(product => {

        html += `
        <div>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <hr>
        </div>
        `;

    });

    document.getElementById("productList").innerHTML = html;
}
// ===============================
// Seller Dashboard Statistics
// ===============================

function getDashboardStats() {

    const totalProducts = sellerProducts.length;

    let totalStock = 0;
    let totalValue = 0;

    sellerProducts.forEach(product => {
        totalStock += product.stock;
        totalValue += product.price * product.stock;
    });

    return {
        totalProducts,
        totalStock,
        totalValue
    };
}

function showDashboardStats() {

    const stats = getDashboardStats();

    console.log("Total Products:", stats.totalProducts);
    console.log("Total Stock:", stats.totalStock);
    console.log("Inventory Value:", stats.totalValue);
}

showDashboardStats();
// ===============================
// Order Management
// ===============================

let sellerOrders = [];

function createOrder(customer, productName, qty, price) {

    const order = {
        id: Date.now(),
        customer,
        productName,
        qty,
        price,
        total: qty * price,
        status: "Pending"
    };

    sellerOrders.push(order);

    localStorage.setItem(
        "sellerOrders",
        JSON.stringify(sellerOrders)
    );
}

function loadOrders() {
    sellerOrders =
        JSON.parse(localStorage.getItem("sellerOrders")) || [];

    return sellerOrders;
}

function updateOrderStatus(orderId, status) {

    sellerOrders = loadOrders();

    sellerOrders.forEach(order => {
        if (order.id === orderId) {
            order.status = status;
        }
    });

    localStorage.setItem(
        "sellerOrders",
        JSON.stringify(sellerOrders)
    );
}// ===============================
// Sales Report
// ===============================

function getSalesReport() {

    sellerOrders = loadOrders();

    let totalOrders = sellerOrders.length;
    let completedOrders = 0;
    let pendingOrders = 0;
    let revenue = 0;

    sellerOrders.forEach(order => {

        if (order.status === "Completed") {
            completedOrders++;
            revenue += order.total;
        }

        if (order.status === "Pending") {
            pendingOrders++;
        }

    });

    return {
        totalOrders,
        completedOrders,
        pendingOrders,
        revenue
    };
}

function showSalesReport() {

    const report = getSalesReport();

    console.log("===== SALES REPORT =====");
    console.log("Total Orders :", report.totalOrders);
    console.log("Completed :", report.completedOrders);
    console.log("Pending :", report.pendingOrders);
    console.log("Revenue : ₹" + report.revenue);

}

showSalesReport();
// ===============================
// Product CRUD - Part 1
// Create Product
// ===============================

function createProduct(
    name,
    price,
    category,
    image,
    stock,
    description
) {

    const seller = JSON.parse(localStorage.getItem("currentUser"));

    if (!seller) {
        alert("Please login as Seller");
        return;
    }

    let products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    const product = {
        id: Date.now(),
        sellerId: seller.id,
        name: name,
        price: Number(price),
        category: category,
        image: image,
        stock: Number(stock),
        description: description,
        status: "Active",
        createdAt: new Date().toLocaleString()
    };

    products.push(product);

    localStorage.setItem(
        "sellerProducts",
        JSON.stringify(products)
    );

    alert("Product Added Successfully");

    return product;
}// ===============================
// Product CRUD - Part 2
// Edit Product
// ===============================

function editProduct(
    productId,
    newName,
    newPrice,
    newCategory,
    newStock,
    newDescription
) {

    let products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    const index = products.findIndex(
        product => product.id === productId
    );

    if (index === -1) {
        alert("Product Not Found");
        return false;
    }

    products[index].name = newName;
    products[index].price = Number(newPrice);
    products[index].category = newCategory;
    products[index].stock = Number(newStock);
    products[index].description = newDescription;

    localStorage.setItem(
        "sellerProducts",
        JSON.stringify(products)
    );

    alert("Product Updated Successfully");

    return true;
}// ===============================
// Product CRUD - Part 3
// Delete & Status
// ===============================

function deleteProduct(productId) {

    let products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    products = products.filter(
        product => product.id !== productId
    );

    localStorage.setItem(
        "sellerProducts",
        JSON.stringify(products)
    );

    alert("Product Deleted Successfully");

    return true;
}

function changeProductStatus(productId, status) {

    let products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    const index = products.findIndex(
        product => product.id === productId
    );

    if (index === -1) {
        return false;
    }

    products[index].status = status;

    localStorage.setItem(
        "sellerProducts",
        JSON.stringify(products)
    );

    return true;
}// ===============================
// Product CRUD - Part 4
// Search & Filter
// ===============================

function searchSellerProducts(keyword) {

    const products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    return products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

function filterProductsByCategory(category) {

    const products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    return products.filter(product =>
        product.category === category
    );
}

function getLowStockProducts(limit = 5) {

    const products =
        JSON.parse(localStorage.getItem("sellerProducts")) || [];

    return products.filter(product =>
        product.stock <= limit
    );
}

function getSellerProductList() {

    return JSON.parse(localStorage.getItem("sellerProducts")) || [];
}
function addProduct() {

    const product = {
        name: document.getElementById("pname").value,
        price: document.getElementById("pprice").value,
        image: document.getElementById("pimage").value,
        createdAt: new Date().toISOString()
    };

    db.collection("products")
      .add(product)
      .then(() => {
          alert("Product Uploaded Successfully");

          document.getElementById("pname").value = "";
          document.getElementById("pprice").value = "";
          document.getElementById("pimage").value = "";
      })
      .catch((error) => {
          console.log(error);
          alert("Upload Failed");
      });
}
