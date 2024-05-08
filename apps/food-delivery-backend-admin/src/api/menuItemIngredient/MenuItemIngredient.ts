import { MenuItem } from "../menuItem/MenuItem";

export type MenuItemIngredient = {
  createdAt: Date | null;
  id: string;
  ingredient: string | null;
  menuItems?: MenuItem;
  updatedAt: Date | null;
};
