function placeOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(name==="" || phone==="" || address===""){
        alert("Please fill all details");
        return;
    }
const order = {
  customerName: name,
  phone: phone,
  address: address,
  items: JSON.parse(localStorage.getItem("cart")) || [],
  status: "Pending",
  createdAt: new Date().toISOString()
};
    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");

    window.location.href = "order-success.html";
}
