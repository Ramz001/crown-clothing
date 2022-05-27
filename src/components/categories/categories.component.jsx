import CategoryItem from "../category-item/category-item.component"
import './categories.styles.scss'

const Categories = ({ categories }) => {
    return(
      <main className="categories-container">
          {
              categories.map( category => (
              <CategoryItem category={category} key={category.id} />
              )
          )}
      </main>
    )
}

export default Categories;