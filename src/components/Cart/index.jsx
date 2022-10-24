import { React} from "react";
import { CartItem } from '../CartItem'
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import emptyCartSVG from '../../assets/emptyCart.svg';

export function Cart() {

    const {cart, clearCart, totalAmount} = useCartContext();

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
                        <Link to={'/checkout'}><button>Checkout</button></Link>
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
