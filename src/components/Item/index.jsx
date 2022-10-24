import React from "react";
import { Link, useParams } from "react-router-dom";
import './style.scss'

export function Item({product}) {

    const {typeId} = useParams();

    return (
        <div className="card">
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>
            <Link to={typeId? `${product.id}` : `${'category/' + product.type + '/' + product.id}`}><button className="seeMore">See more</button></Link>
        </div>
    )
}