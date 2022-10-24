import React from "react"
import { Item } from '../Item';
import './style.scss'

export default function ItemList({productsList}) {
    return (
        <>
            {productsList.map((prod) => <Item key={prod.id} product={prod}/>)}
        </>
    )
}