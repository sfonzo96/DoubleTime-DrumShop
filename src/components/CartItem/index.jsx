import { React } from "react";

export function CartItem({product}) {

    return (
        <>
            <div>
                <img src={product.image} alt="" width='200px'/>
            </div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.amount}</div>
            <div>{parseInt(product.price * product.amount)}</div>
            {/* <div>Delete from Cart</div> HACER BOTON LUEGO*/}
        </>
    )
}