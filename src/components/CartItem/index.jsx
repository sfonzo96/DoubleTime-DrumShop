import { React } from "react";
import { useCartContext } from "../../context/CartContext";
import './style.scss'

export function CartItem({product}) {

    const { removeProduct } = useCartContext();

    return (
        <div className="cartSubRow">
            <div>
                <img src={product.image} alt="" width='200px'/>
            </div>
            <div>{product.title}</div>
            <div>
                <button> - </button> {/* Dar funciones en CartContext que modifiquen la prop amount del producto en cart */}
                <p>{product.amount}</p>
                <button> + </button>
            </div>
            <div>{parseInt(product.price * product.amount)}</div>
            <button className="removeItemBtn" onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
    )
}