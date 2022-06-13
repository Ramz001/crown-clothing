import { 
    CartIconContainer, 
    ShoppingCartIcon, 
    ItemCount } from './cart-icon.styles';
import { useContext }   from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingCartIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;