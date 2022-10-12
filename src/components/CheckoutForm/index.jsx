import { React} from "react";
import { useCartContext } from '../../context/CartContext'
import { useNavigate } from "react-router-dom";
import { db, sales } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export function CheckoutForm() {

   const  navigate = useNavigate();

    const buyerTemplate = {
        fullName: '',
        email: '',
        phoneNumber: '',
    }

    const {cart, clearCart, totalAmount} = useCartContext();
    const [buyerData, setBuyerData] = useState(buyerTemplate);

    const order = {
        buyer: buyerData,
        items: cart.map(product => ({
            id: product.id,
            brand: product.brand,
            title: product.title,
            amount: product.amount,
            price: product.price
        })),
        totalAmount,
        date: serverTimestamp()        
    }

    const getBuyerData = (e) => {
        const {name, value} = e.target;
        setBuyerData({...buyerData, [name]: value});
    }

    const postSaleData = (e) => {
        e.preventDefault();
        const salesCollection = collection(db, sales);
        addDoc(salesCollection, order)
        .then( ()  => {
            clearCart();
            setBuyerData(buyerTemplate);
        })
        .then(console.log('this is going to show a sweetalert'))
        .then(navigate('/'));
    }

    return (
        <>
            <form onSubmit={postSaleData}>
                <label htmlFor="">Full name
                    <input type="text" name='fullName' placeholder="John Doe" value={buyerData.fullName} onChange={getBuyerData}/>
                </label>
                <label htmlFor="">Email
                    <input type='email' name='email' placeholder="johndoe@example.com" value={buyerData.email} onChange={getBuyerData} />
                </label>
                <label htmlFor="">Contact phone number
                    <input type="number" name='phoneNumber' placeholder="+12345679010" value={buyerData.phoneNumber} onChange={getBuyerData}/>
                </label>
                <button type="submit">Confirm purchase</button>
            </form>
        </>
    )
}