import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YAHAN_APNI_API_KEY_PASTE_KARO",
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
