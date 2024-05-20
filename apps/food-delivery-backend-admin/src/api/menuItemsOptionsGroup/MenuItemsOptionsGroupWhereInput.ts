import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MenuItemOptionListRelationFilter } from "../menuItemOption/MenuItemOptionListRelationFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MenuItemsOptionsGroupWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lowerLimit?: IntNullableFilter;
  menuItemOptions?: MenuItemOptionListRelationFilter;
  menuItems?: MenuItemWhereUniqueInput;
  optionGroupDescription?: StringNullableFilter;
  optionGroupName?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  upperLimit?: IntNullableFilter;
};
