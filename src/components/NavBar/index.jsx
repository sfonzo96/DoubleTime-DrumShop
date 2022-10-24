import React from "react";
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget';
import NavUl from "../NavUl";
import './style.scss'
import { Link } from "react-router-dom";

export function NavBar() {
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