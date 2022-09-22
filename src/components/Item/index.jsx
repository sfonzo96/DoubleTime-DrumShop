import React from "react";
import './Item.scss'
import { Link, useParams } from "react-router-dom";

export function Item({product}) {

    const {typeId} = useParams();

    return (
        <div className="card">
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>
            <Link to={typeId? `${product.id}` : `${product.type + '/' + product.id}`}><button className="seeMore">See more</button></Link>
        </div>
    )
}