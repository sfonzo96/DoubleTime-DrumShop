import React from "react";
import logo from '../../assets/logo.png';
import Cart from '../cart/Cart';
import NavUl from "../navul/NavUl";
import './header.css'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <NavUl />
                <Cart />
            </header>
        </>
    )
}

export default Header