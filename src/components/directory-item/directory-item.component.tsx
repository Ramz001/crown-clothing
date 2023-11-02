import {
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { Category } from "../../features/categories/categories.types";

type DirectoryItemProps = {
  category: Category
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const navigateCategoryItems = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryBodyContainer onClick={navigateCategoryItems}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
