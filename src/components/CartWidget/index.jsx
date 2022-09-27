import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <div className="cartContainer">
            <Link to='/cart'>
                <ShoppingCartIcon />
                <span>0</span>
            </Link>
        </div>
    )
}

export default CartWidget