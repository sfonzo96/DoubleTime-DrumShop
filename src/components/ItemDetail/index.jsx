import {React, useState, useEffect} from "react";
import './ItemDetail.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';
import { ItemCounter} from '../ItemCounter';
 
function ItemDetail({product}) {

    const {typeId} = useParams();
    const [productWasAdded, setProductWasAdded] = useState(false);

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
                    {productWasAdded? 
                        <Link to='/Cart'>
                            <button className="addToCartBtn">Go to cart</button>
                        </Link>
                        :
                        <ItemCounter initialAmount={1} stockAmount={product.stock} setProductWasAdded={setProductWasAdded} productWasAdded={productWasAdded}/>
                    }
                </div> 
            </div>
        </div>
    )
}

export {ItemDetail};