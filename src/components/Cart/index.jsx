import { React} from "react";
import { CartItem } from '../CartItem'
import { useCartContext } from '../../context/CartContext'

export function Cart() {
    const {cart, clearCart} = useCartContext();

    return (
        <div className="cartContainer"> 
            {/*<div className="cartRow cartCategories">
            </div> */}
            <div className="cartRow">
                {cart.map((cartItem) => <CartItem key={cartItem.id} product={cartItem}/>)}
            </div>
            <button onClick ={clearCart}>Clear cart</button>
        </div>
    )
}