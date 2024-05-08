import { MenuItemOptionCreateNestedManyWithoutMenuItemsOptionsGroupsInput } from "./MenuItemOptionCreateNestedManyWithoutMenuItemsOptionsGroupsInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemsOptionsGroupCreateInput = {
  lowerLimit?: number | null;
  menuItemOptions?: MenuItemOptionCreateNestedManyWithoutMenuItemsOptionsGroupsInput;
  menuItems: MenuItemWhereUniqueInput;
  optionGroupDescription?: string | null;
  optionGroupName?: string | null;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
