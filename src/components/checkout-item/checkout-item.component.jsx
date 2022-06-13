import { CheckoutItemContainer, 
    ImageContainer, 
    Name, 
    Quantity, 
    Price, 
    Arrow,
    Value, 
    RemoveButton } from './checkout-item.styles';
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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{ name }</Name>
            <Quantity>
                <Arrow onClick={handleSubtract}>
                    &#10094;
                </Arrow>
                <Value>{ quantity }</Value>
                <Arrow onClick={handleAddition}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>${ price }</Price>
            <RemoveButton onClick={handleRemove}> &#10005; </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;