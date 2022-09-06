import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cart.css'

function CartWidget() {
    return (
        <div className="cartContainer">
            <ShoppingCartIcon />
            <span>0</span>
        </div>
    )
}

export default CartWidget