import React, { useState, useEffect } from "react";
import './ItemListContainer.scss'
import ItemList from "../ItemList";
import { cymbals } from '../../assets/cymbals';
import { customFetch } from "../../utils/functions/customFetch";
import { CircularProgress, Backdrop } from '@mui/material/';
import { useParams } from 'react-router-dom';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';

export function ItemListContainer() {
    
    const {typeId} = useParams();

    const [productsList, setProductsList] = useState([]);

    //Backdrop de MUI
    const [open, setOpen] = useState(true); 
    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(() => {
        customFetch(cymbals)
            .then(res => {
                if (typeId) {
                    setProductsList(res.filter((product) => product.type === typeId))
                } else setProductsList(res); 
                handleClose();
            })
    }, [typeId]);

    return (
        <>
            <h1 className='listTitle'>{prettyNameFromType(typeId).toUpperCase()}</h1>
            <div className="itemListContainer">
                {open?
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}                                                        
                        onClick={handleClose}
                        >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                :
                    <ItemList productsList={productsList}/>
                }
            </div>
        </>
    )
}