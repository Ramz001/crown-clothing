import { CheckoutContainer, 
    CheckoutHeader, 
    Total, 
    HeaderBlock } from './checkout.styles';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, cartSum } = useContext(CartContext) 

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Image</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Name</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total>Total: ${cartSum}</Total>
        </CheckoutContainer>
    )
}

export default Checkout