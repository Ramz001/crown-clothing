import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../../features/cart/cart.selector";
import { setIsCartOpen } from "../../features/cart/cart.slice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen())}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
