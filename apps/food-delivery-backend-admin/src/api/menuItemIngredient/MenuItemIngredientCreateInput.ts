import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemIngredientCreateInput = {
  ingredient?: string | null;
  menuItems: MenuItemWhereUniqueInput;
  updatedAt?: Date | null;
};
