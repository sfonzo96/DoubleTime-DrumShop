import {React, useState, useEffect} from "react";
import './ItemDetailContainer.scss'
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom';
import { db, products } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";

export function ItemDetailContainer() {

    const [detailedProduct, setDetailedProduct] = useState({});

    const {productId} = useParams();

    useEffect(() => {
        const productCollection = collection(db, products);
        const refDoc = doc(productCollection, productId)
        getDoc(refDoc)
        .then (result  => {
            setDetailedProduct(
                {
                    id: result.id,
                    ...result.data(),
                }
            )
        })
    }, [productId]);

    return (
        <ItemDetail product={detailedProduct}/>
    )
}