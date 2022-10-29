import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { DotPulse } from '@uiball/loaders';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';
import { db, products } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import './style.scss'
import dbError from '../../assets/dberror.svg'

export function ItemListContainer() {   
    
    const {typeId} = useParams();

    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsCollection = collection(db, products);
                const qry = typeId? query(productsCollection, where('type', '==', typeId)) : productsCollection;
                await getDocs(qry)
                .then((data) => {
                    const list = data.docs.map((product) => {
                        return { ...product.data(), id: product.id };
                    });
                    qry === productsCollection? setProductsList(list.slice(0,6)) : setProductsList(list);
                });
            } catch {
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, [typeId]);

    return (
        <>  
            {isLoading? 
                <DotPulse size={40} speed={1.3} color="#111010"/>
            :   
                <>
                    {error?
                        <div className='errorContainer'>
                            <img src={dbError} alt="" />
                            <p>Oops... Something happened when trying to collect data, please try again</p>
                        </div>
                        :

                        <>
                            <h1 className='listTitle'>
                                <span className="listTitleStyle"></span>
                                {prettyNameFromType(typeId).toUpperCase()}
                                <span className="listTitleStyle"></span>
                            </h1>
                            <div className="itemListContainer">
                                <ItemList productsList={productsList}/>
                            </div>
                        </>
                    }
                </>
           }
        </>
    )
}