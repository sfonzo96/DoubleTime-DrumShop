import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.scss'

function CartWidget() {
    return (
        <div className="cartContainer">
            <ShoppingCartIcon />
            <span>0</span>
        </div>
    )
}

export default CartWidget