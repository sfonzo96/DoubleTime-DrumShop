import React from "react"
import { Item } from '../Item';

export default function ItemList({productsList}) {
    return (
        <>
            {productsList.map((prod) => <Item key={prod.id} product={prod}/>)}
        </>
    )
}