import React, { useState, useEffect } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './itemCounter.scss'

function ItemCounter({initialAmount, stockAmount, onAdd}) {
    const [counter, setCounter] = useState(initialAmount);

    const plus1 = () => {
        setCounter(counter + 1);
    };

    const minus1 = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="counterContainer">
            <div className="upperCounter">
                <button className="minus1Btn" onClick={minus1} disabled={counter === initialAmount}><RemoveCircleIcon/></button>
                <div className="counterShow">{counter}</div>
                <button className="plus1Btn" onClick={plus1} disabled={counter === stockAmount}><AddCircleIcon/></button>
            </div>
            <button className="addToCartBtn" onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter;