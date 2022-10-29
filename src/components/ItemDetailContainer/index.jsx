import {React, useState, useEffect} from "react";
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom';
import { DotPulse } from '@uiball/loaders';
import { db, products } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import './style.scss'
import dbError from '../../assets/dberror.svg'

export function ItemDetailContainer() {

    const {productId} = useParams();

    const [detailedProduct, setDetailedProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)        

    useEffect(() => {
        const getProduct = async () => {
            try {
                const productCollection = collection(db, products);
                const refDoc = doc(productCollection, productId)
                await getDoc(refDoc)
                .then (data  => {
                    setDetailedProduct(
                        {
                            id: data.id,
                            ...data.data(),
                        }
                    );
                })
            } catch {
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }

        getProduct();
    }, [productId]);

    return (
        <>
            {isLoading?
                <DotPulse size={40} speed={1.3} color="#111010"/>
                :
                error?  
                    <div className="errorContainer">
                        <img src={dbError} alt=''/>
                    </div> 
                    : 
                    <ItemDetail product={detailedProduct}/>
            }
        </>
    )
}