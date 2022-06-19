import { createContext, useReducer } from "react";

const changeCartItem = (cartItems, currentCartItem, actionType) => {
    const matchingCartItem = cartItems.find(cartItem => cartItem.id === currentCartItem.id)
    
    // either increases or decreases the quantity of the item in the cart
    if (matchingCartItem && actionType === 'increment' || actionType === 'decrement') {
        return cartItems.map(cartItem => {
            if (cartItem.id === currentCartItem.id) {
                switch(actionType) {
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
    
    // removes an item from the cart
    if(matchingCartItem && actionType === 'remove') {
        return cartItems.filter(cartItem => cartItem.id !== currentCartItem.id)
    }
    /// if all above if statements fail, then returns the default cartItems
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

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error("CartReducer: action type not recognized");
        }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartSum: 0
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartCount, cartSum } = state;

    const setIsCartOpen = (bool) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartSum = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);
        const newCartCount = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartSum: newCartSum
            }
        })
    }
    
    const changeItemInCart = (currentCartItem, actionType) => {
        updateCartItemsReducer(changeCartItem(cartItems, currentCartItem, actionType))
    }
    
    const value = { isCartOpen, setIsCartOpen, cartItems, changeItemInCart, cartCount, cartSum };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
