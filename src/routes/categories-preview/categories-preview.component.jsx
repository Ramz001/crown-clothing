import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../features/categories/categories.selector";

const CategoriesPreview = () => {
  const { categories } = useSelector((state) => state.categories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      { isLoading 
      ? <Spinner />
      : categories.map((products) => {
          return (
            <CategoryPreview
              key={products.title}
              title={products.title}
              products={products}
            />
          );
        })
      }
    </>
  );
};

export default CategoriesPreview;
