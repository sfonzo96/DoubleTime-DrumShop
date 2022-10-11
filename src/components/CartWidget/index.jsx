import React, { useState, useEffect } from "react";
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
                <svg xmlns="http://www.w3.org/2000/svg" width="380.391" height="511" viewBox="0 0 380.391 511">
                    <path id="shoppingbag" d="M445.663,469.921,431.3,110.88A15.457,15.457,0,0,0,415.814,96H351v-.5a95.5,95.5,0,0,0-191,0V96H95.187A15.459,15.459,0,0,0,79.7,110.88L65.337,469.921A39.5,39.5,0,0,0,104.806,511H406.2a39.5,39.5,0,0,0,39.468-41.079ZM175,95.5a80.5,80.5,0,0,1,161,0V96H175ZM423.862,488.474A24.294,24.294,0,0,1,406.2,496H104.806a24.5,24.5,0,0,1-24.48-25.479L94.687,111.48a.5.5,0,0,1,.5-.48H160v48.5a7.5,7.5,0,0,0,15,0V111H336v48.5a7.5,7.5,0,0,0,15,0V111h64.814a.5.5,0,0,1,.5.48l14.362,359.041A24.293,24.293,0,0,1,423.862,488.474Z" transform="translate(-65.304)"/>
                </svg>
                {cart.length ? <span>{itemsInCart}</span> : null}
            </Link>
        </div>
    )
}

export default CartWidget