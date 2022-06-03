import './cart-icon.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'; 
import { useContext }   from 'react';
import { CartToggleContext } from '../../contexts/cart-toggle.context';


const CartIcon = () => {
    const { setIsCartOpen, isCartOpen } = useContext(CartToggleContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;