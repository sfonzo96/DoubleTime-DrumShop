import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('CART')) || []);
    
    const isInCart = (id) => cart.find(product => product.id === id)? true : false;

    const addProduct = (product, amount) => {
        if (isInCart(product.id)) {
            setCart(cart.map( prod => {
                return prod.id === product.id ? {...prod, amount: prod.amount + amount} : prod
            }));
        } else {
            setCart([...cart, {...product, amount}]);
        }
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const clearCart = () => setCart([]);

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));
      }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}