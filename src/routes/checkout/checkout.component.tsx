import {
  CheckoutContainer,
  CheckoutHeader,
  Total,
  HeaderBlock,
  CartMessage,
} from "./checkout.styles";
import PaymentForm from "../../components/payment-form/payment-form.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartSum, selectCartItems } from "../../features/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartSum = useSelector(selectCartSum);

  if (cartItems.length > 0) {
    return (
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
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Total: ${cartSum}</Total>
        <PaymentForm />
      </CheckoutContainer>
    );
  }
  return <CartMessage>Your cart is empty!</CartMessage>;
};

export default Checkout;
