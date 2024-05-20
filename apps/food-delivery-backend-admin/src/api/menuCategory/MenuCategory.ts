import { MenuSubCategory } from "../menuSubCategory/MenuSubCategory";
import { Restaurant } from "../restaurant/Restaurant";

export type MenuCategory = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  isActive: boolean | null;
  menuSubCategories?: Array<MenuSubCategory>;
  name: string | null;
  restaurants?: Restaurant;
  updatedAt: Date | null;
};
