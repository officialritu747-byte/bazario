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

}
