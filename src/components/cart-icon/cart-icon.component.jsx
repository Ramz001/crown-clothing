import { 
    CartIconContainer, 
    ShoppingCartIcon, 
    ItemCount } from './cart-icon.styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../features/cart/cart.slice';

const CartIcon = () => {
    const dispatch = useDispatch()
    const { cartCount } = useSelector(state => state.cart)
    
    return(
        <CartIconContainer onClick={() => dispatch(setIsCartOpen())}>
            <ShoppingCartIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;