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
                        <button>Checkout</button>
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


/* Nostrar:
- Desglose de carrito y precio total CHECKED and working
- Eliminar cada producto CHECKED and working
- Mensaje condicionado en caso de que no haya productos (array.length === 0?) + link a home page // CHECKED and working 
- CartWidget no tiene que mostrar nada en caso que este vacio (no debe mostrar el 0, simplemente el boton)  // CHECKED and working
- */