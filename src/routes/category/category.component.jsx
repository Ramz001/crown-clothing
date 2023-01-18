import { CategoryContainer, CategoryTitle } from "./category.styles";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../features/categories/categories.slice";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
