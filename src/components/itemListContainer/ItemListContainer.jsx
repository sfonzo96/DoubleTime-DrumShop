import React from "react";
import './itemListContainer.css'
import ItemCounter from "../itemCounter/ItemCounter";

function ItemListContainer({greetings}) {
    const onAdd = (amount) => {
        alert(`Agregaste ${amount} productoX al carrito`)
    }

    return (
        <div className="itemListContainer">
            <h1 className='h1desafio'>{greetings}</h1>
            <ItemCounter stockAmount={9} onAdd={onAdd} initialAmount={1}/>
        </div>

    )
}

export default ItemListContainer;