import React from "react";
import './NavUl.scss'
import { Link } from 'react-router-dom';

function NavUl() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='rides'>Rides</Link></li>
                    <li><Link to='hihats'>Hi-Hats</Link></li>
                    <li><Link to='crashes'>Crashes</Link></li>
                    <li><Link to='fxcymbs'>FX Cymbals</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavUl