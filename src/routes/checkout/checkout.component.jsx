import { CheckoutContainer, 
    CheckoutHeader, 
    Total, 
    HeaderBlock,
    CartMessage } from './checkout.styles';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = () => {

    const { cartItems, cartSum } = useSelector(state => state.cart)

    if(cartItems.length > 0) {
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
    return (
        <CartMessage>Your cart is empty!</CartMessage>
    )
}

export default Checkout