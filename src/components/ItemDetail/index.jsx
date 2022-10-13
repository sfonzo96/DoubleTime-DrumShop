import {React, useState} from "react";
import './ItemDetail.scss';
import { Link, useParams } from 'react-router-dom';
import { prettyNameFromType } from '../../utils/functions/prettyNameFromType';
import { ItemCounter} from '../ItemCounter';
import { useCartContext } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function ItemDetail({product}) {

    const {typeId} = useParams();

    const [productWasAdded, setProductWasAdded] = useState(false);
    const {addProduct} = useCartContext();

    const productAdded = (product, amount) => {
        toast.success(`${amount}x ${product.title} was added to the cart`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const onAdd = (product, amount) => {
        setProductWasAdded(true);
        addProduct(product, amount);
        productAdded(product, amount);
    }

    return (
        <>
            <div className="itemDetailContent">
                <div className="goBackDiv">
                    <Link to={`/category/${typeId}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="445.002" height="248.175" viewBox="0 0 445.002 248.175">
                            <g id="goback" transform="translate(0 -75.914)">
                            <path id="Trazado_1" data-name="Trazado 1" d="M425.738,182.686H65.766l85.895-77.214a16.1,16.1,0,0,0,0-24.485,20.818,20.818,0,0,0-27.238,0L5.644,187.757a16.1,16.1,0,0,0,0,24.485L124.422,319.017a20.821,20.821,0,0,0,27.238,0,16.1,16.1,0,0,0,0-24.484L65.766,217.315H425.738C436.376,217.315,445,209.562,445,200S436.377,182.686,425.738,182.686Z"/>
                            </g>
                        </svg>
                        <p>{ `BACK TO ${prettyNameFromType(typeId).toUpperCase()}` }</p>   
                    </Link>           
                </div>
                <div className="detailBottomDiv">
                    <img src={product.image} alt="" />
                    <div className="descriptDiv">
                        <h2>{product.title}</h2>
                        <p>{'$ ' + product.price}</p>
                        <p>{product.description}</p>
                        {productWasAdded? 
                            <Link to='/Cart'>
                                <button className="addToCartBtn">Go to cart</button>
                            </Link>
                            :
                            <ItemCounter initialAmount={1} stockAmount={product.stock} onAdd={onAdd} product={product}/>
                        }
                    </div> 
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export {ItemDetail};