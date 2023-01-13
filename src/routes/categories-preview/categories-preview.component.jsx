import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      {categories.map((products) => {
        return (
          <CategoryPreview
            key={products.title}
            title={products.title}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
