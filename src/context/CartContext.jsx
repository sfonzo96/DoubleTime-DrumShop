import React, { useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('CART')) || []);
    
    const isInCart = (id) => {return cart.find(product => product.id === id)};

    const addProduct = (product, amount, size) => {
        if (isInCart(product.id)) {
            setCart(cart.map( prod => {
                return prod.id === product.id ? {...prod, amount: prod.amount + amount, pickedSize: size} : prod // Solo permite elegir un tamaño, debería modificar id acorde al elegido :(
            }));
        } else {
            setCart([...cart, {...product, amount, pickedSize: size}]);
        }
    }

    const productDeleted = (product) => {
        toast.error(`${product.title} was deleted from cart`, {
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

    const removeProduct = (id,productToDelete) => {
        productDeleted(productToDelete);
        setCart(cart.filter(product => product.id !== id));
    };
    
    const [totalAmount, setTotalAmount] = useState(0);

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));

        let total = 0;
        cart.forEach(item => {
            total += item.amount * item.price;
        })
        setTotalAmount(total);
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}