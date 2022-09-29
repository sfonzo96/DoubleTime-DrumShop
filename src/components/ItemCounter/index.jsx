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
                <button className="minus1Btn" onClick={decrement} disabled={counter === initialAmount || stockAmount === 0 }><RemoveCircleIcon/></button>
                <div className="counterShow">{counter}</div>
                <button className="plus1Btn" onClick={increment} disabled={counter === stockAmount || stockAmount === 0 }><AddCircleIcon/></button>
            </div>
            <button className="addToCartBtn" disabled={stockAmount === 0} onClick={() => onAdd(product, counter)}>{stockAmount? 'Add to cart' : 'No stock available'}</button>
        </div>
    )
}

export { ItemCounter};