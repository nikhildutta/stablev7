import { MenuSubCategoryUpdateManyWithoutMenuCategoriesInput } from "./MenuSubCategoryUpdateManyWithoutMenuCategoriesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCategoryUpdateInput = {
  description?: string | null;
  isActive?: boolean | null;
  menuSubCategories?: MenuSubCategoryUpdateManyWithoutMenuCategoriesInput;
  name?: string | null;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
