import { React } from "react";
import { useCartContext } from "../../context/CartContext";
import './style.scss'

export function CartItem({product}) {

    const { removeProduct } = useCartContext();

    return (
        <div className="cartItemRow">
            <div>
                <img src={product.image} alt=""/>
            </div>
            <div>
                {`${product.pickedSize}" ${product.title}`}
            </div>
            <div>
                <p>{product.amount}</p>
            </div>
            <div>
                {parseInt(product.price * product.amount)}
            </div>
            <button className="removeItemBtn" onClick={() => removeProduct(product.id, product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20.142" height="20.2" viewBox="0 0 20.142 20.2">
                    <path id="cross-svgrepo-com" d="M19.512,0,10.779,8.763,2.045,0,.708,1.333,9.446,10.1.708,18.868,2.045,20.2l8.733-8.763L19.512,20.2l1.337-1.332L12.112,10.1,20.85,1.333Z" transform="translate(-0.708)"/>
                </svg>
            </button>
        </div>
    )
}