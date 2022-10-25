import React from "react";
import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget';
import NavUl from "../NavUl";
import './style.scss'
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <header>
                <Link className="logoContainer" to='/'>
                    <img src={logo} alt="logo" ></img>
                    <p>Double-Time</p>
                </Link>
                <NavUl />
                <CartWidget />
            </header>
        </>
    )
}