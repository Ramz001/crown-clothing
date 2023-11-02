import { ProductCardContainer, Footer } from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { changeCartItem, addItemToCart } from "../../features/cart/cart.slice";
import { CartItemType } from "../../features/cart/cart.types";

type ProductCartTypes = {
  product: CartItemType
}

const ProductCard = ({ product }: ProductCartTypes) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart({ cartItem: product }));
    dispatch(changeCartItem({ cartItem: product, actionType: 'increment' }))
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} loading="lazy" />
      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
