import { MenuItemIngredient as TMenuItemIngredient } from "../api/menuItemIngredient/MenuItemIngredient";

export const MENUITEMINGREDIENT_TITLE_FIELD = "ingredient";

export const MenuItemIngredientTitle = (
  record: TMenuItemIngredient
): string => {
  return record.ingredient?.toString() || String(record.id);
};
