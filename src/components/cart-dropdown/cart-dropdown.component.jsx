import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setIsCartOpen } from "../../features/cart/cart.slice";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const goToCheckout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen())
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckout}>
        Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
