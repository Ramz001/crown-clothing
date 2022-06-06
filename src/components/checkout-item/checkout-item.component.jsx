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
            <span className='quantity'>
                <div className='arrow' onClick={handleSubtract}>
                    &#10094;
                </div>
                <div className='value'>{ quantity }</div>
                <div className='arrow' onClick={handleAddition}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${ price }</span>
            <span className='remove-button' onClick={handleRemove}> &#10005; </span>
        </div>
    )
}

export default CheckoutItem;