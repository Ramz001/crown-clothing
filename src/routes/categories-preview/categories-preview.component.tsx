import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { useAppSelector } from "../../utils/hooks/hooks";
import { selectCategoriesIsLoading } from "../../features/categories/categories.selector";

const CategoriesPreview = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

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
