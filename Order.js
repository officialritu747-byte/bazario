class Order {
    constructor(
        orderId,
        customerId,
        sellerId,
        products,
        totalAmount,
        paymentMethod
    ) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.sellerId = sellerId;
        this.products = products;
        this.totalAmount = totalAmount;
        this.paymentMethod = paymentMethod;
        this.status = "Pending";
        this.createdAt = new Date();
    }
}
const testOrder = new Order(
    "ORD001",
    "USER001",
    "SELLER001",
    ["P001"],
    599,
    "Cash on Delivery"
);

console.log(testOrder);
