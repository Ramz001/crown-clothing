import { createContext, useEffect, useReducer } from "react";

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

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_COUNT: "SET_CART_COUNT",
    SET_CART_SUM: "SET_CART_SUM",
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
                cartItems: payload,
            };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload,
            };
        case CART_ACTION_TYPES.SET_CART_SUM:
            return {
                ...state,
                cartSum: payload,
            };
        default:
            throw console.error("CartReducer: action type not recognized");
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

    const setIsCartOpen = (isCartOpen) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: isCartOpen,
        });
    }

    const setCartItems = (cartItems) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: cartItems,
        });
    }

    const setCartCount = (cartCount) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_COUNT,
            payload: cartCount,
        });
    }

    const setCartSum = (cartSum) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_SUM,
            payload: cartSum,
        });
    }

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
