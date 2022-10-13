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
                <p>{product.amount}</p>
            </div>
            <div>{parseInt(product.price * product.amount)}</div>
            <button className="removeItemBtn" onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
    )
}