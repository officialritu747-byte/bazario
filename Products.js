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
