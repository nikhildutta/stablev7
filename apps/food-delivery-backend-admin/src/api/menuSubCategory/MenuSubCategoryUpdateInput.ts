import { MenuCategoryWhereUniqueInput } from "../menuCategory/MenuCategoryWhereUniqueInput";
import { MenuItemUpdateManyWithoutMenuSubCategoriesInput } from "./MenuItemUpdateManyWithoutMenuSubCategoriesInput";

export type MenuSubCategoryUpdateInput = {
  isActive?: boolean | null;
  menuCategories?: MenuCategoryWhereUniqueInput;
  menuItems?: MenuItemUpdateManyWithoutMenuSubCategoriesInput;
  name?: string | null;
  updatedAt?: Date | null;
};
