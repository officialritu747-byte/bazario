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
