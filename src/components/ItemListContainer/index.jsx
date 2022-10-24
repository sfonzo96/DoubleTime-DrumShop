import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { DotPulse } from '@uiball/loaders';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';
import { db, products } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import './style.scss'

export function ItemListContainer() {   
    
    const {typeId} = useParams();

    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDocsAndSetList = (qry) => {
        getDocs(qry)
        .then((data) => {
            const list = data.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setProductsList(list);
            setIsLoading(false);
        });
    }
    
    useEffect(() => {
        const productCollection = collection(db, products);
        if (typeId) {
            const qryFilter = query(productCollection, where('type', '==', typeId));
            getDocsAndSetList(qryFilter);
        } else {
            getDocsAndSetList(productCollection);
        }
    }, [typeId]);

    return (
        <>  
            <h1 className='listTitle'>
                <span className="listTitleDeco"></span>
                {prettyNameFromType(typeId).toUpperCase()}
                <span className="listTitleDeco"></span>
            </h1>
            {isLoading? 
                <DotPulse size={40} speed={1.3} color="#111010"/>
            :
                <div className="itemListContainer">
                    <ItemList productsList={productsList}/>
                </div>
           }
        </>
    )
}