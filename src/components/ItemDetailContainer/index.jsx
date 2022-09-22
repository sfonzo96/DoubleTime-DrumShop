import {React, useState, useEffect} from "react";
import './ItemDetailContainer.scss'
import { ItemDetail } from '../ItemDetail'
import { customFetch } from "../../utils/functions/customFetch";
import {cymbals} from '../../assets/cymbals'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [detailedProduct, setDetailedProduct] = useState({});

    const {productId} = useParams();


    useEffect(() => {
        customFetch(cymbals)
            .then(res  => res.find(product => product.id === parseInt(productId)))
            .then(res => {
                setDetailedProduct(res); 
            })
    }, [productId]);

    return (
        <ItemDetail product={detailedProduct}/>
    )
}

export { ItemDetailContainer };