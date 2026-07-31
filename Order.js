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
function updateOrderStatus(orderId, status) {

    if (testOrder.orderId === orderId) {

        testOrder.status = status;

        console.log("Order Status Updated:", testOrder);

    }

}

function cancelOrder(orderId) {

    if (testOrder.orderId === orderId) {

        testOrder.status = "Cancelled";

        console.log("Order Cancelled");

    }

}

function trackOrder(orderId) {

    if (testOrder.orderId === orderId) {

        console.log(
            "Tracking:",
            testOrder.status,
            testOrder.createdAt
        );

    }

}updateOrderStatus("ORD001", "Shipped");

trackOrder("ORD001");

cancelOrder("ORD001");
