import { ProductCardContainer, Footer } from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { changeCartItem, addItemToCart } from "../../features/cart/cart.slice";
import { CartItemType } from "../../features/cart/cart.types";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { CategoryItem } from "../../features/categories/categories.types";

type ProductCartTypes = {
  product: CategoryItem 
}

const ProductCard = ({ product }: ProductCartTypes) => {
  const { name, imageUrl, price } = product;
  const dispatch = useAppDispatch();

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
