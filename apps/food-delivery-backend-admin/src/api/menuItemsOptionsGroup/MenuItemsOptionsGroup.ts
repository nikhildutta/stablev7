import { MenuItemOption } from "../menuItemOption/MenuItemOption";
import { MenuItem } from "../menuItem/MenuItem";

export type MenuItemsOptionsGroup = {
  createdAt: Date | null;
  id: string;
  lowerLimit: number | null;
  menuItemOptions?: Array<MenuItemOption>;
  menuItems?: MenuItem;
  optionGroupDescription: string | null;
  optionGroupName: string | null;
  updatedAt: Date | null;
  upperLimit: number | null;
};
