import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from '../Cart/';
import NavUl from "../NavUl";
import './Header.scss'

export function Header() {
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