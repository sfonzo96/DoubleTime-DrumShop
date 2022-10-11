import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('CART')) || []);
    
    const isInCart = (id) => {return cart.find(product => product.id === id)};

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