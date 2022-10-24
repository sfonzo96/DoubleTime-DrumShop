import React from "react";
import { Link } from 'react-router-dom';
import './style.scss'

const navLinks = [
    {id: 0, text:'Home', route:'/'},
    {id: 1, text:'Rides', route: 'category/rides'},
    {id: 2, text:'Hi-Hats', route: 'category/hihats'},
    {id: 3, text:'Crashes', route: 'category/crashes'},
    {id: 4, text:'FX Cymbals', route: 'category/fxcymbs'},
    {id: 5, text:'Tracker', route: '/tracker'}
];

function NavUl() {
    return (
        <>
            <nav>
                <ul>
                    {navLinks.map(link => <li key={link.id}><Link key={link.id} to={link.route}>{link.text}</Link></li>)}
                </ul>
            </nav>
        </>
    )
}

export default NavUl