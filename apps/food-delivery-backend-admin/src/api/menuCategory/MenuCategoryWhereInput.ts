import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuSubCategoryListRelationFilter } from "../menuSubCategory/MenuSubCategoryListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCategoryWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  menuSubCategories?: MenuSubCategoryListRelationFilter;
  name?: StringNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
