import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from '../cart/Cart';
import NavUl from "../navul/NavUl";
import './header.css'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <NavUl />
                <CartWidget />
            </header>
        </>
    )
}

export default Header