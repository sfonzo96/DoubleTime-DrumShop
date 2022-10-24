import {React, useState, useEffect} from "react";
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom';
import { DotPulse } from '@uiball/loaders';
import { db, products } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import './style.scss'

export function ItemDetailContainer() {

    const {productId} = useParams();

    const [detailedProduct, setDetailedProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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
            );
            setIsLoading(false);
        })
    }, [productId]);

    return (
        <>
            {isLoading?
                <DotPulse size={40} speed={1.3} color="#111010"/>
            :
                <ItemDetail product={detailedProduct}/>
            }
        </>
    )
}