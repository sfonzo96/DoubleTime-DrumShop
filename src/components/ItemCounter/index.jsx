import React, { useState} from "react";
import './style.scss'


function ItemCounter({initialAmount, stockAmount, onAdd, product, size}) {

    const [counter, setCounter] = useState(initialAmount);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="counterContainer">
            <div className="counter">
                <button className="minus1Btn" onClick={decrement} disabled={counter === initialAmount || stockAmount === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="490" height="45.938" viewBox="0 0 490 45.938">
                        <rect id="remove" width="490" height="45.938"/>
                    </svg>
                </button>
                <div className="counterShow">{counter}</div>
                <button className="plus1Btn" onClick={increment} disabled={counter === stockAmount || stockAmount === 0 }>
                <svg xmlns="http://www.w3.org/2000/svg" width="490" height="490" viewBox="0 0 490 490">
                    <path id="add" d="M222.031,490h45.938V267.969H490V222.031H267.969V0H222.031V222.031H0v45.938H222.031Z"/>
                </svg>

                </button>
            </div>
            <button className="addToCartBtn" disabled={stockAmount === 0} onClick={() => onAdd(product, counter, size)}>{stockAmount? 'Add to cart' : 'No stock available'}</button>
        </div>
    )
}

export { ItemCounter};