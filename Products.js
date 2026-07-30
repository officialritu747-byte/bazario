const ProductEngine = {
  products: [],

  add(product) {
    this.products.push(product);
  },

  getAll() {
    return this.products;
  },

  getById(id) {
    return this.products.find(p => p.id === id);
  },

  update(id, data) {
    const product = this.getById(id);
    if (product) Object.assign(product, data);
  },

  delete(id) {
    this.products = this.products.filter(p => p.id !== id);
  }
};
class Product {
    constructor(id, name, category, price, stock, image, sellerId, description) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.sellerId = sellerId;
        this.description = description;
        this.createdAt = new Date();
    }
}

const testProduct = new Product(
    "P001",
    "Basmati Rice 5kg",
    "Groceries",
    599,
    50,
    "images/rice.jpg",
    "SELLER001",
    "Premium Quality Basmati Rice"
);

console.log(testProduct);
const testProduct = new Product(
    "P001",
    "Basmati Rice 5kg",
    "Groceries",
    599,
    50,
    "images/rice.jpg",
    "SELLER001",
    "Premium Quality Basmati Rice"
);

console.log(testProduct);
