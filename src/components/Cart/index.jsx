import { React, useState } from "react";
import { CartItem } from '../CartItem'
import { useCartContext } from '../../context/CartContext'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, products } from "../../firebase/firebase";
import { collection, getDocs} from "firebase/firestore";
import './style.scss';
import emptyCartSVG from '../../assets/emptyCart.svg';
import { useEffect } from "react";

export function Cart() {

    const {cart, clearCart, totalAmount} = useCartContext();
    const navigate = useNavigate();
    
    const [dbProducts, setDbProducts] = useState([]);
    const [notAvailableProducts, setNotAvailableProducts] = useState([]);
    const [gettingData, setGettingData] = useState(true);

    const verifyAvailability = async () => {
        try {
            const productCollection = collection(db, products);
            await getDocs(productCollection)
            .then((data) => {
                const list = data.docs.map((doc) => {
                    return {...doc.data(), id: doc.id};
                });
                setDbProducts(list);
            })
            .then(res => compareStock(cart, dbProducts))
            .then(res => setNotAvailableProducts(res)
            )
        } catch(error) {
            setTimeout(() => {setGettingData(false)}, 5000)
        }
    }

    const proceedToCheckout = () => {
        if (notAvailableProducts.length === 0) {
            navigate('/checkout')
        } else {
            toast.error(`Seems like we run out of stock in some of these products, we suggest you to check the updated stock on the product page.`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const compareStock = (cart, dbProducts) => {
        const missingProducts = [];
        cart.forEach(item => {
            const matchingProduct = dbProducts.find(obj => obj.id === item.id);
            if (item.amount > matchingProduct.stock) missingProducts.push(matchingProduct);
        })
        return [...missingProducts];
    }

    useEffect(() => {
        verifyAvailability();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gettingData, cart])

    return (
        <>
            {cart.length ? (
                <div className="cartContainer"> 
                    <div className="cartRow itemsContainer">
                        {cart.map((cartItem) => <CartItem key={cartItem.id} product={cartItem}/>)}
                    </div>
                    <div className="cartRow">
                        <p>Total a pagar: $ {totalAmount}</p>
                    </div>
                    <div className="clearAndCheckoutContainer">
                        <button onClick={clearCart}>Clear cart</button>
                        <button onClick={proceedToCheckout} className={gettingData? 'checkoutBtn disabled' : 'checkoutBtn'}>{!gettingData? 'Checkout' : 'Available in 5s'}</button>
                    </div>
                </div>
                ) : (
                <div className="emptyCartAdv">
                    <img src={emptyCartSVG} alt=''/>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't found your sound yet...</p>
                    <Link to={'/'}><button>Shop now</button></Link>
                </div>
            )}
            <ToastContainer />
        </>
    )
}
