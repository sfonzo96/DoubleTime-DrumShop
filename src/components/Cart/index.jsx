import { React} from "react";
import { CartItem } from '../CartItem'
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import './Cart.scss';

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
                        <p>Total a pagar</p>
                        <p>{totalAmount}</p>
                    </div>
                    <div className="outerBtnContainer">
                        <button onClick ={clearCart}>Clear cart</button>
                        <Link to={'/checkout'}><button>Checkout</button></Link>
                    </div>
                </div>
            ) : (
                <div className="emptyCartAdv">
                    <h3>Looks like something's missing</h3>
                    <p>Seems that there're no products so far...</p>
                    <Link to={'/'}><button>Start shopping</button></Link>
                </div>
            )}
        </>
    )
}
