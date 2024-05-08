import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemIngredientUpdateInput = {
  ingredient?: string | null;
  menuItems?: MenuItemWhereUniqueInput;
  updatedAt?: Date | null;
};
