import React, { useState, useEffect } from "react";
import './itemListContainer.scss'
import ItemList from "../ItemList";
import { cymbals } from '../../assets/cymbals';
import customFetch from "../../custom/functions/customFetch";
import { CircularProgress, Backdrop } from '@mui/material/';
/* import ItemCounter from "../ItemCounter/"; */

function ItemListContainer({greetings}) {
/*     const onAdd = (amount) => {
        alert(`Agregaste ${amount} productoX al carrito`)
    } */

    const [productsList, setProductsList] = useState([]);

    //Backdrop de MUI
    const [open, setOpen] = useState(true); 
    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(() => {
        customFetch(cymbals)
            .then(res => {
                setProductsList(res); 
                handleClose();
            })
    }, []);

    return (
        <>
            <h1 className='sampleTitle'>{greetings}</h1>
            <div className="itemListContainer">
                {open?
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} //zIndex default es 1200, por qué goma suma 1? Por qué es 1200 el default? Ver y seguir hilo de vínculos --> https://mui.com/material-ui/customization/default-theme/?expand-path=$.zIndex
                        open={open}                                                        
                        onClick={handleClose}
                        >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                :
                    <ItemList productsList={productsList}/>
                }
                {/* <ItemCounter stockAmount={9} onAdd={onAdd} initialAmount={1}/> */}
            </div>
        </>
    )
}

export default ItemListContainer;