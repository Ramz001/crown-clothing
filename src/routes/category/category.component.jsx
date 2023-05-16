import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../features/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      { isLoading 
      ? <Spinner /> 
      : <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      }
    </>
  );
};

export default Category;
