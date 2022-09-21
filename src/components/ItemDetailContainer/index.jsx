import {React, useState, useEffect} from "react";
import './ItemDetailContainer.scss'
import { ItemDetail } from '../ItemDetail'
import { customFetch } from "../../custom/functions/customFetch";
import {cymbals} from '../../assets/cymbals'

function ItemDetailContainer() {

    const [productDetailed, setProductDetailed] = useState({});

    useEffect(() => {
        customFetch(cymbals)
            .then(res => res[0])
            .then(res => {
                setProductDetailed(res); 
            })
    }, []);

    return (
        <ItemDetail product={productDetailed}/>
    )
}

export { ItemDetailContainer };