import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles";
import { selectCartCount } from "../../features/cart/cart.selector";
import { setIsCartOpen } from "../../features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen())}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
