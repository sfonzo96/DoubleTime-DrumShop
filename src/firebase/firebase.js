import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5oQmqRbzvBF0JBR7ZseVYXD5_nco2Gxw",
  authDomain: "pentagram-drum-shop.firebaseapp.com",
  projectId: "pentagram-drum-shop",
  storageBucket: "pentagram-drum-shop.appspot.com",
  messagingSenderId: "918104892991",
  appId: "1:918104892991:web:cbc1e80dfbc6323e02ba8a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const products = 'products';
export const sales = 'sales';
export const categories ='categories'