import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuCategoryWhereUniqueInput } from "../menuCategory/MenuCategoryWhereUniqueInput";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MenuSubCategoryWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  menuCategories?: MenuCategoryWhereUniqueInput;
  menuItems?: MenuItemListRelationFilter;
  name?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
