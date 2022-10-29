import { React } from 'react'
import { Link } from "react-router-dom";
import './styles.scss'

export function Footer() {
    return (
        <footer>
            <div className='footerSupContainer'>
                 <div className='userIndex'>
                    <h3>To the buyer</h3>
                    <ul>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/tracker'}>Tracker</Link>
                        <Link to={'/cart'}>Cart</Link>
                    </ul>
                 </div>
                 <div className='footerCatalogueIndex'>
                    <h3>Catalogue</h3>
                    <ul>
                        <Link to={'category/crashes'}>Crashes</Link>
                        <Link to={'category/fxcymbs'}>FX Cymbals</Link>
                        <Link to={'category/hihats'}>Hi-Hats</Link>
                        <Link to={'category/rides'}>Rides</Link>
                    </ul>
                 </div>
                 <div className='contactInfo'>
                    <h3>Contact</h3>
                    <a href="https://www.linkedin.com/in/santiagofonzo/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="linkedin" transform="translate(-6 -6)">
                                <path id="Sustracción_1" data-name="Sustracción 1" d="M-207-150h-26a5.005,5.005,0,0,1-5-5v-26a5.006,5.006,0,0,1,5-5h26a5.006,5.006,0,0,1,5,5v26A5.006,5.006,0,0,1-207-150Zm-9.192-18.8c1.939,0,3.191,1.452,3.191,3.7v9.1h5v-9.726c0-4.623-2.282-7.274-6.261-7.274A5.048,5.048,0,0,0-219-170.384V-173h-5v17h5v-9c0-.083,0-.18,0-.285a5.446,5.446,0,0,1,.1-1.522A2.9,2.9,0,0,1-216.192-168.8ZM-232-173v17h5v-17Zm2.515-7A2.4,2.4,0,0,0-232-177.5a2.4,2.4,0,0,0,2.457,2.5h.028A2.4,2.4,0,0,0-227-177.5,2.391,2.391,0,0,0-229.486-180Z" transform="translate(244 192)" fill="#0288d1"/>
                            </g>
                        </svg>
                    </a>
                 </div>
            </div>
            <small>© Copyright 2022, <span>Santiago Fonzo</span>. All rights reserved.</small>
        </footer>
    )
}