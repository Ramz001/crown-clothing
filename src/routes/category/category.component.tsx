import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../features/categories/categories.selector";
import { useAppSelector } from "../../utils/hooks/hooks";

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  
  const categories = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);


  useEffect(() => {

    category && setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category && category.toUpperCase()}</CategoryTitle>
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
