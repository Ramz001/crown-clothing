import DirectoryItem from "../directory-item/directory-item.component"
import './categories.styles.scss'

const Categories = ({ categories }) => {
    return(
      <main className="categories-container">
          {
            categories.map( category => (
            <DirectoryItem category={category} key={category.id} />
            ))
          }
      </main>
    )
}

export default Categories;