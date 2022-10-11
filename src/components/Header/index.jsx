import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget';
import NavUl from "../NavUl";
import './Header.scss'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header>
                <Link to='/'>
                    <img src={logo} alt="logo" ></img>
                </Link>
                <NavUl />
                <CartWidget />
            </header>
        </>
    )
}