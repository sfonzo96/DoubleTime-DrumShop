import { React} from "react";
import { CartItem } from '../CartItem'
import { useCartContext } from '../../context/CartContext'

export function Cart() {
    const {cart} = useCartContext();

    return (
        <div className="cartContainer"> 
            {/* <>Testinggg, REMINDER: hacer sitema carrito</> */}
            {/*<div className="cartRow cartCategories">
            </div> */}
            <div className="cartRow">
                {cart.map((cartItem) => <CartItem key={cartItem.id} product={cartItem}/>)}
            </div>
        </div>
    )
}