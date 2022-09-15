import React from "react";
import './item.scss'

export default function Item({product}) {
    return (
        <div className="card">
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
    )
}