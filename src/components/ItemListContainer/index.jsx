import React, { useState, useEffect } from "react";
import './ItemListContainer.scss'
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';
import { db, products } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export function ItemListContainer() { //Agregar loader
    
    const {typeId} = useParams();

    const [productsList, setProductsList] = useState([]);
    
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
            <h1 className='listTitle'>{prettyNameFromType(typeId).toUpperCase()}</h1>
            <div className="itemListContainer">
                    <ItemList productsList={productsList}/>
            </div>
        </>
    )

    function getDocsAndSetList(qry) {
        getDocs(qry)
        .then((data) => {
            const list = data.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setProductsList(list);
        });
    }
}