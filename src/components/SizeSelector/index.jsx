import { React } from "react";
import './styles.scss'

export function SizeSelector({selectSize, product}) {
    
    return(
        <select className='sizeSelector' onChange={selectSize}>
            {product.avSizes.map((cymbalSize, i) => <option key={i} value={cymbalSize}>{`${cymbalSize}"`}</option>)}
        </select>
    )
}