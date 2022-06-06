import { createContext, useState, useEffect } from "react";

const changeItemInACart = (cartItems, currentCartItem, type) => {
    const matchingCartItem = cartItems.find(cartItem => cartItem.id === currentCartItem.id)

    if (matchingCartItem && type === 'increment' || type === 'decrement') {
        return cartItems.map(cartItem => {
            if (cartItem.id === currentCartItem.id) {
                switch(type) {
                    case 'increment':
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    case 'decrement':
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    default:
                        return cartItem
                }
            }
            return cartItem
        })
    }

    if(matchingCartItem && type === 'remove') {
        return cartItems.filter(cartItem => cartItem.id !== currentCartItem.id)
    }
    
    return [...cartItems, { ...currentCartItem, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    changeItemInCart: () => {},
    cartCount: 0,
    cartSum: 0
}); 

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSum, setCartSum] = useState(0);

    useEffect(() => {
        const newCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        setCartCount(newCount);
    }, [cartItems])

    useEffect(() => {
        const newSum = cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
        setCartSum(newSum);
    }, [cartItems])

    const changeItemInCart = (currentCartItem, type) => {
        setCartItems(changeItemInACart(cartItems, currentCartItem, type))
    }
    
    const value = { isCartOpen, setIsCartOpen, cartItems, changeItemInCart, cartCount, cartSum };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
