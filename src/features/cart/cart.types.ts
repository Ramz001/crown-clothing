import { CategoryItem } from "../categories/categories.types";

type CartQuantity = {
  quantity: number;
}

export type CartItemType = CategoryItem & CartQuantity
