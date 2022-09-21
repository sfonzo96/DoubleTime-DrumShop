import React from "react";
import './Item.scss'

export function Item({product}) {
    return (
        <div className="card">
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>
            <button className="seeMore">Ver más</button>
        </div>
    )
}