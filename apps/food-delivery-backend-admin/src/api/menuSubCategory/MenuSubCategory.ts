import { MenuCategory } from "../menuCategory/MenuCategory";
import { MenuItem } from "../menuItem/MenuItem";

export type MenuSubCategory = {
  createdAt: Date | null;
  id: string;
  isActive: boolean | null;
  menuCategories?: MenuCategory;
  menuItems?: Array<MenuItem>;
  name: string | null;
  updatedAt: Date | null;
};
