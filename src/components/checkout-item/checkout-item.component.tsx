import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import {
  changeCartItem,
  removeItemFromCart,
} from "../../features/cart/cart.slice";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { CartItemType } from "../../features/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItemType;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const dispatch = useAppDispatch();

  const handleAddition = () =>
    dispatch(changeCartItem({ cartItem, actionType: "increment" }));
  const handleSubtract = () =>
    quantity > 1
      ? dispatch(changeCartItem({ cartItem, actionType: "decrement" }))
      : dispatch(removeItemFromCart({ cartItem }));

  const handleRemove = () =>
    dispatch(removeItemFromCart({ cartItem: cartItem }));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleSubtract}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddition}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={handleRemove}> &#10005; </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
