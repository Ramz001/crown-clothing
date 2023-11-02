import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
// hooks
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../features/cart/cart.slice";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { CartItemType } from "../../features/cart/cart.types";

const CartDropdown = () => {
  const { cartItems } = useAppSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  type CartItem = {};

  const goToCheckout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen());
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: CartItemType) => (
            <CartItem key={item.id} cartItem={item} />
          ))
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
