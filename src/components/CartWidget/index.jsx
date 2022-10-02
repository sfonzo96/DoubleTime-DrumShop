import React, { useState, useEffect } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

function CartWidget() {

    const {cart} = useCartContext();

    const [itemsInCart, setItemsInCart] = useState(0);
    
    useEffect(() => {
        if (cart.length) {
            let totalAmount = 0;
            cart.forEach(item => totalAmount += item.amount);
            setItemsInCart(totalAmount);
        }
    }, [cart]);

    return (
        <div className="cartContainer">
            <Link to='/cart'>
                <ShoppingCartIcon />
                {cart.length ? <span>{itemsInCart}</span> : null}
            </Link>
        </div>
    )
}

export default CartWidget