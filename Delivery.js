class Delivery {

    constructor(id, riderName, phone) {
        this.id = id;
        this.riderName = riderName;
        this.phone = phone;
        this.status = "Available";
        this.currentOrder = null;
    }

    assignOrder(orderId) {
        this.currentOrder = orderId;
        this.status = "Busy";
    }

    completeOrder() {
        this.currentOrder = null;
        this.status = "Available";
    }

}

const rider = new Delivery(
    "D001",
    "Rahul",
    "9876543210"
);

console.log(rider);
function updateLocation(lat, lng) {
    rider.location = {
        latitude: lat,
        longitude: lng
    };

    console.log("Location Updated", rider.location);
}

function estimateDelivery(minutes) {
    console.log(
        "Estimated Delivery Time:",
        minutes + " minutes"
    );
}

updateLocation(28.6139, 77.2090);

estimateDelivery(20);
