import Categories from "../../components/categories/categories.component";
import { nanoid } from 'nanoid';

const Home = () => {
    const categories = [
        {
          "id": nanoid(),
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": nanoid(),
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": nanoid(),
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": nanoid(),
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": nanoid(),
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
      
    return(
      <Categories categories={categories} />
    )
}

export default Home;