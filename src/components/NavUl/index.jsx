import React from "react";
import './NavUl.scss'
import { Link } from 'react-router-dom';


function NavUl() {
    return (
        <>
            <nav>
                <ul> {/* Crear categorias vía map */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='category/rides'>Rides</Link></li>
                    <li><Link to='category/hihats'>Hi-Hats</Link></li>
                    <li><Link to='category/crashes'>Crashes</Link></li>
                    <li><Link to='category/fxcymbs'>FX Cymbals</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavUl