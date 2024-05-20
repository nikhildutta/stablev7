import { MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput } from "./MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemsOptionsGroupUpdateInput = {
  lowerLimit?: number | null;
  menuItemOptions?: MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput;
  menuItems?: MenuItemWhereUniqueInput;
  optionGroupDescription?: string | null;
  optionGroupName?: string | null;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
