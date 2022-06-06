import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react'
 
const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const { changeItemInCart }  = useContext(CartContext);

    const handleAddition = () => changeItemInCart(cartItem, 'increment');
    const handleSubtract = () => (quantity > 1) 
        ? changeItemInCart(cartItem, 'decrement') 
        : changeItemInCart(cartItem, 'remove');

    const handleRemove = () => changeItemInCart(cartItem, 'remove');

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity } x </span>
            <span className='price'>{ price }</span>
            <button onClick={handleAddition}>add </button>
            <button onClick={handleSubtract}>subtract </button>
            <button onClick={handleRemove}> remove</button>
        </div>
    )
}

export default CheckoutItem;