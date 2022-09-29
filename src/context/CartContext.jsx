import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addProduct = (product, amount) => {
        if (isInCart(product.id)) {
            setCart(cart.map( prod => {
                return prod.id === product.id ? {...prod, amount: prod.amount + amount} : prod
            }));
        } else {
            setCart([...cart, {...product, amount}]);
        }
    }

    const emptyCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id)? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            cart,
            emptyCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}