import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  // yahan tumhara Firebase config hoga
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
