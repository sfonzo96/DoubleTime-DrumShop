import React from "react";
import './ItemDetail.scss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function ItemDetail({product}) {
    return (
        <div className="itemDetailContent">
            <div className="goBackDiv">
                <ArrowCircleLeftIcon /> 
                <p>GO BACK</p>              
            </div>
            <div className="detailBottomDiv">
                <img src={product.image} alt="" />
                <div className="descriptDiv">
                    <h2>{product.title}</h2>
                    <p className="productModalPrice">{'$ ' + product.price}</p>
                    <p className="productModalDescript">{product.description}</p>
                    <button className="addBtn" id='addBtn'> Add to cart</button>
                </div> 
            </div>
        </div>
    )
}

export {ItemDetail};