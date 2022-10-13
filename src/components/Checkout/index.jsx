import { React} from "react";
import { useCartContext } from '../../context/CartContext'
import { db, sales, products } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Checkout() {

    const buyerTemplate = {
        fullName: '',
        email: '',
        phoneNumber: '',
    }

    const {cart, clearCart, totalAmount} = useCartContext();
    const [buyerData, setBuyerData] = useState(buyerTemplate);
    const [saleId, setSaleId] = useState('');

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

    const updateStock = () => {
        cart.forEach((product) => {
            const update = doc(db, products, product.id);
            updateDoc(update, {stock: product.stock - product.amount});
        })
    }

    const postSaleData = (e) => {
        e.preventDefault();
        const salesCollection = collection(db, sales);
        addDoc(salesCollection, order)
        .then( result => {
            setSaleId(result.id)
            updateStock();
            clearCart();
            setBuyerData(buyerTemplate);
        })
    }

    return (
        <>
            {saleId? 
                <h2>The order has been saved, well reach you as soon as we can in order to confirm it and set a payment method.
                    This sale's ID is {saleId}, keep it for checking it's status by using our tracking system.
                    We are glad you're choosing us for getting your new cymbal. You'll be rocking it soon so, hold on!
                    Click <Link to={'/'}>here</Link> to return to the home page.
                </h2>
            :
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
            }
        </>
    )
}