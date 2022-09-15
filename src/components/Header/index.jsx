import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from '../Cart/';
import NavUl from "../NavUl";
import './header.scss'

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