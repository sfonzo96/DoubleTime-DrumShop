import React from "react";
import './ItemDetail.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';

function ItemDetail({product}) {

    const {typeId} = useParams();

    return (
        <div className="itemDetailContent">
            <div className="goBackDiv">
                <Link to={`/${typeId}`}>
                    <ArrowBackIcon /> 
                    <p>{ `BACK TO ${prettyNameFromType(typeId).toUpperCase()}` }</p>   
                </Link>           
            </div>
            <div className="detailBottomDiv">
                <img src={product.image} alt="" />
                <div className="descriptDiv">
                    <h2>{product.title}</h2>
                    <p>{'$ ' + product.price}</p>
                    <p>{product.description}</p>
                    <button className="addBtn"> Add to cart</button>
                </div> 
            </div>
        </div>
    )
}

export {ItemDetail};