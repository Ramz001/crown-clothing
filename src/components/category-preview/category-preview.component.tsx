import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { Category } from "../../features/categories/categories.types";
import { CartItemType } from "../../features/cart/cart.types";

type CategoryPreviewProps = {
  title: string;
  products: Category;
};

const CategoryPreview = (props: CategoryPreviewProps) => {
  const { title, products } = props;

  return (
    <CategoryPreviewContainer>
      <Title to={`/shop/${title.toLowerCase()}`}>{title}</Title>
      <Preview>
        {products.items
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
