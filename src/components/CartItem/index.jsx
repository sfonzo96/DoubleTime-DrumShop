import { React } from "react";

export function CartItem({product}) {

    return (
        <>
            <div>{product.image}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.amount}</div>
            <div>{parseInt(product.price * product.amount)}</div>
            {/* <div>Delete from Cart</div> HACER BOTON LUEGO*/}
        </>
    )
}