import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemIngredientWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  ingredient?: StringNullableFilter;
  menuItems?: MenuItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
