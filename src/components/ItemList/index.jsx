import { listClasses } from "@mui/material";
import React from "react"
import Item from '../Item';

export default function ItemList({productsList}) {
    return (
        <>
            {productsList.map((prod) => <Item key={`${prod.id}-${prod.title}`} product={prod}/>)}
        </>
    )
}