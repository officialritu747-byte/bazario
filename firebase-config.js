import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YAHAN_APNI_API_KEY_PASTE_KARO",// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaDLjF1nbsftZ6t03iFxGfSRsRfZHLqP0",
  authDomain: "bazario-9bd2b.firebaseapp.com",
  projectId: "bazario-9bd2b",
  storageBucket: "bazario-9bd2b.firebasestorage.app",
  messagingSenderId: "830078880682",
  appId: "1:830078880682:web:2739e1d0251db9445ff9d3",
  measurementId: "G-2HGW98SEN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  authDomain: "bazario-9bd2b.firebaseapp.com",
  projectId: "bazario-9bd2b",
  storageBucket: "bazario-9bd2b.firebasestorage.app",
  messagingSenderId: "830078880682",
  appId: "1:830078880682:web:2739e1d0251db9445ff9d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export async function testFirebase() {
    console.log("Firebase Connected Successfully");
    return true;
}

testFirebase();
db.collection("orders")
  .add(order)
  .then(() => {
      localStorage.removeItem("cart");
      window.location.href = "success.html";
  })
  .catch((error) => {
      alert("Order Save Failed");
      console.log(error);
  });
