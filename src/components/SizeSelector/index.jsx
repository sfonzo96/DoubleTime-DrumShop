import { SizeOption } from '../SizeOption';

export function SizeSelector({selectSize, product}) {
    
    return(
        <select onChange={selectSize}>
            {product.avSizes.map(cymbalSize => <SizeOption key={`${cymbalSize}${product.title}`} cymbalSize={cymbalSize}/>)}
        </select>
    )
}