import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default CartDropdown;