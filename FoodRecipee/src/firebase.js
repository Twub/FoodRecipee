import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAj7_vWct0HzdjfwAw8hbXhtPVNhmVQnuA",
    authDomain: "recepee-db.firebaseapp.com",
    projectId: "recepee-db",
    storageBucket: "recepee-db.firebasestorage.app",
    messagingSenderId: "764825325665",
    appId: "1:764825325665:web:2ad4a672a31866e7c31a20",
    measurementId: "G-XBBMTMNSNE"
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }
