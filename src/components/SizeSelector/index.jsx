import { React } from "react";

export function SizeSelector({selectSize, product}) {
    
    return(
        <select onChange={selectSize}>
            {product.avSizes.map((cymbalSize, i) => <option key={i} value={cymbalSize}>{`${cymbalSize}"`}</option>)}
        </select>
    )
}