import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./directory.styles";
import { nanoid } from "nanoid";
import { Category } from "../../features/categories/categories.types";

const categories = [
  {
    id: nanoid(),
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: nanoid(),
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: nanoid(),
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: nanoid(),
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: nanoid(),
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
]

const Directory = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;
