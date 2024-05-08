import { MenuSubCategoryCreateNestedManyWithoutMenuCategoriesInput } from "./MenuSubCategoryCreateNestedManyWithoutMenuCategoriesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCategoryCreateInput = {
  description?: string | null;
  isActive?: boolean | null;
  menuSubCategories?: MenuSubCategoryCreateNestedManyWithoutMenuCategoriesInput;
  name?: string | null;
  restaurants: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
