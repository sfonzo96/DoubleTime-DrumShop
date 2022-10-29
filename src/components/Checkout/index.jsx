import { React, useState } from "react";
import { useCartContext } from '../../context/CartContext'
import { db, sales, products } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import './style.scss'
import rockHand from '../../assets/rockHand.svg'

export function Checkout() {

    const buyerTemplate = {
        fullName: '',
        email: '',
        emailVerif: '',
        message: '',
    }

    const {cart, clearCart, totalAmount} = useCartContext();
    const [buyerData, setBuyerData] = useState(buyerTemplate);
    const [saleId, setSaleId] = useState('');

    const copyIdToClipboard = (saleId) => {
        navigator.clipboard.writeText(saleId)
        .then(        
            toast.success('ID was copied to the clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })) 
    }

    const order = {
        buyer: buyerData,
        items: cart.map(product => ({
            id: product.id,
            brand: product.brand,
            title: product.title,
            pickedSize: product.pickedSize,
            amount: product.amount,
            price: product.price
        })),
        totalAmount,
        date: serverTimestamp(),
        status: 'Pending'    
    }

    const getBuyerData = (e) => {
        const {name, value} = e.target;
        setBuyerData({...buyerData, [name]: value});
    }

    const updateStock = () => {
        cart.forEach((product) => {
            const update = doc(db, products, product.id.substring(0,20));
            updateDoc(update, {stock: product.stock - product.amount});
        })
    }

    const postSaleData = (e, saleId) => {
        e.preventDefault();
        if (!saleId && (buyerData.email === buyerData.emailVerif) && buyerData.fullName) {
            const salesCollection = collection(db, sales);
            addDoc(salesCollection, order)
            .then( result => {
                setSaleId(result.id);
                updateStock();
                clearCart();
                setBuyerData(buyerTemplate);
            })
        } else {
            toast.error(`A required field of the form is missing. Please complete them all in order to submit your purchase successfully, also check emails match`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>  
            {saleId? 
                <div className="successfulBuyContainer">
                    <img src={rockHand} alt=''/>
                    <p>
                        The order has been saved, we'll reach you as soon as possible in order to confirm everything's OK and set your preferred payment method.
                        <br />This sale's ID is <button className="copyIdBtn" onClick={() => copyIdToClipboard(saleId)}>{saleId}</button> (click it to copy), keep it handy for checking your purchase status by using our tracking system.
                        We are glad you're choosing us for getting your new cymbal. You'll be rocking it soon so, hold on!
                        Click <Link to={'/'}>here</Link> to return to the home page.
                    </p>
                </div>
            :
                <form className='chkOutForm' onSubmit={postSaleData}>
                    <label htmlFor="">Full name
                        <input type="text" name='fullName' placeholder="Your full name" value={buyerData.fullName} onChange={getBuyerData} required={true}/>
                    </label>
                    <label htmlFor="">Email
                        <input type='email' name='email' placeholder="Your e-mail" value={buyerData.email} onChange={getBuyerData} required={true}/>
                    </label>
                    <label htmlFor="">Verificate email
                        <input type='email' name='emailVerif' placeholder="Your e-mail" value={buyerData.emailVerif} onChange={getBuyerData} required={true}/>
                    </label>
                    <label htmlFor="">Message (optional)
                        <textarea rows={5} type="number" name='message' placeholder="Things you consider to be important for us to know" value={buyerData.message} onChange={getBuyerData}/>
                    </label>
                    <button type="submit">Confirm purchase</button>
                </form>
            }
            <ToastContainer />
        </>
    )
}