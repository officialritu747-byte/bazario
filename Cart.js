const CartEngine = {
  items: [],

  add(product) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({
        ...product,
        quantity: 1
      });
    }

    this.save();
  },

  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
  },

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },

  load() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
  },

  total() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
};

CartEngine.load();
class CartItem {
    constructor(
        productId,
        productName,
        price,
        quantity,
        image
    ) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.total = price * quantity;
    }
}
const testCart = new CartItem(
    "P001",
    "Basmati Rice 5kg",
    599,
    2,
    "images/rice.jpg"
);

console.log(testCart);
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}cartHTML += `
<div class="cart-item">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <p>Qty: ${item.quantity}</p>

    <button onclick="removeFromCart(${index})">
        Remove
    </button>
</div>
`;cart.forEach((item, index) => {
    // Yahi HTML banega
});
