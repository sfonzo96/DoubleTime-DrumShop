import React, { useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './ItemCounter.scss'


function ItemCounter({initialAmount, stockAmount, onAdd, product}) {

    const [counter, setCounter] = useState(initialAmount);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="counterContainer">
            <div className="upperCounter">
                <button className="minus1Btn" onClick={decrement} disabled={counter === initialAmount}><RemoveCircleIcon/></button>
                <div className="counterShow">{counter}</div>
                <button className="plus1Btn" onClick={increment} disabled={counter === stockAmount}><AddCircleIcon/></button>
            </div>
            <button className="addToCartBtn" onClick={() => onAdd(product, counter)}>Add to cart</button>
        </div>
    )
}

export { ItemCounter};