import { useState } from 'react';
import CartContext from "./cart-context";

const CartProvider = props => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const addItemToCartHandler = item => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                (prevItem) => prevItem.id === item.id
            );
            
            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    amount: updatedItems[existingItemIndex].amount + item.amount
                };
                return updatedItems;
            }
            
            return [...prevItems, item];
        });

        setCartTotalAmount(prevAmount => prevAmount + (item.price * item.amount));
    };

    const removeItemToCartHandler = id => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === id);
            const existingItem = prevItems[existingItemIndex];
            
            if (existingItem.amount === 1) {
                setCartTotalAmount(prevAmount => prevAmount - existingItem.price);
                return prevItems.filter(item => item.id !== id);
            }
            
            const updatedItems = [...prevItems];
            updatedItems[existingItemIndex] = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            setCartTotalAmount(prevAmount => prevAmount - existingItem.price);
            return updatedItems;
        });
    };

    const cartContext = {
        items: cartItems,
        totalAmount: cartTotalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;