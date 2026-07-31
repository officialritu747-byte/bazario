class Notification {

    constructor(userId, title, message) {
        this.userId = userId;
        this.title = title;
        this.message = message;
        this.status = "Unread";
        this.createdAt = new Date();
    }

    send() {
        console.log("Notification Sent");
    }

    markAsRead() {
        this.status = "Read";
    }
}

const testNotification = new Notification(
    "USER001",
    "Order Confirmed",
    "Your order has been placed successfully."
);

testNotification.send();

console.log(testNotification);
function notifyOrder(orderId) {

    const notification = new Notification(
        "USER001",
        "Order Update",
        "Your Order " + orderId + " is Confirmed."
    );

    notification.send();

    return notification;
}

notifyOrder("ORD001");
