import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";
import { CartItemType } from "../../features/cart/cart.types";

type CartItemProps = {
  cartItem: CartItemType
}


const CartItem = ({ cartItem }:CartItemProps) => {
  const { name, imageUrl, quantity, price } = cartItem

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
