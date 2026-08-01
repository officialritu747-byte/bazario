import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
window.deleteProduct = async function(id){

    if(confirm("Delete this product?")){

        await deleteDoc(doc(db,"products",id));

        alert("Product Deleted");

    }
import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const stock = Number(document.getElementById("stock").value);
  const description = document.getElementById("description").value;

  await addDoc(collection(db, "products"), {
    name,
    price,
    stock,
    description
  });

  alert("Product Uploaded");
  productForm.reset();
  loadProducts();
});

async function loadProducts() {
  productList.innerHTML = "";

  const snapshot = await getDocs(collection(db, "products"));

  snapshot.forEach((doc) => {
    const p = doc.data();

    productList.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>Stock: ${p.stock}</p>
      </div>
    `;
  });
}

loadProducts();
}
const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        preview.src = URL.createObjectURL(file);

        preview.style.display = "block";

    }

});
