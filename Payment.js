class Payment {
    constructor(
        paymentId,
        orderId,
        customerId,
        amount,
        method
    ) {
        this.paymentId = paymentId;
        this.orderId = orderId;
        this.customerId = customerId;
        this.amount = amount;
        this.method = method; // UPI, Card, COD
        this.status = "Pending";
        this.createdAt = new Date();
    }
}
const testPayment = new Payment(
    "PAY001",
    "ORD001",
    "USER001",
    599,
    "Cash on Delivery"
);

console.log(testPayment);
