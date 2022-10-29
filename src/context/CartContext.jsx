import React, { useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('CART')) || []);
    const [totalAmount, setTotalAmount] = useState(0);
    
    const findInCart = (id, size) => {return cart.find(item => item.id === `${id}-${size}`)};
    const clearCart = () => setCart([]);

    const addProduct = (product, amount, size) => {
        const notifyAddition = (bool) => {
            if (bool) {
                toast.success(`${amount} ${size}" ${product.title} was added to the cart`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.error(`The amount you want to add will surpass the stock, you can add up to ${product.stock - productInCart.amount}`, {
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
        }
        const productInCart = findInCart(product.id, size);
        

        if (productInCart) {
            const stockIsEnough = product.stock >= productInCart.amount + amount? true : false;
            if (stockIsEnough) {
                setCart(cart.map( item => {
                    return item.id === `${product.id}-${size}` ? {...item, amount: item.amount + amount, pickedSize: size} : item;
                }));
            }
            notifyAddition(stockIsEnough)
        } else {
            const newId = `${product.id}-${size}`
            setCart([...cart, {...product, amount, pickedSize: size, id: newId }]);
            notifyAddition(true);
        }
    }

    const removeProduct = (id,productToDelete) => {
        setCart(cart.filter(product => product.id !== id));
        toast.error(`${productToDelete.title} was deleted from cart`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    
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
            removeProduct,
            addProduct,
            totalAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}