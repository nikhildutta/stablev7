import { MenuCategoryWhereUniqueInput } from "../menuCategory/MenuCategoryWhereUniqueInput";
import { MenuItemCreateNestedManyWithoutMenuSubCategoriesInput } from "./MenuItemCreateNestedManyWithoutMenuSubCategoriesInput";

export type MenuSubCategoryCreateInput = {
  isActive?: boolean | null;
  menuCategories: MenuCategoryWhereUniqueInput;
  menuItems?: MenuItemCreateNestedManyWithoutMenuSubCategoriesInput;
  name?: string | null;
  updatedAt?: Date | null;
};
