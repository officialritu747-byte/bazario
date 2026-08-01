// ===== Seller Dashboard =====

// Dashboard Data
let totalProducts = 0;
let totalOrders = 0;
let totalSales = 0;
let earnings = 0;

// Update Dashboard
function updateDashboard() {

    document.getElementById("totalProducts").innerText = totalProducts;

    document.getElementById("totalOrders").innerText = totalOrders;

    document.getElementById("totalSales").innerText = "₹" + totalSales;

    document.getElementById("earnings").innerText = "₹" + earnings;
}

// Upload Product
document.getElementById("productForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    const stock = document.getElementById("stock").value;

    const description = document.getElementById("description").value;

    const list = document.getElementById("productList");

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p><b>₹${price}</b></p>
        <p>Stock : ${stock}</p>
        <p>${description}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    list.appendChild(card);

    totalProducts++;

    updateDashboard();

    document.getElementById("productForm").reset();

    alert("Product Added Successfully");
});db.collection("products").add({
    name: name,
    price: Number(price),
    stock: Number(stock),
    description: description,
    createdAt: new Date()
})
.then(() => {
    console.log("Product Saved");
})
.catch((error) => {
    console.log(error);
});

updateDashboard();
}
