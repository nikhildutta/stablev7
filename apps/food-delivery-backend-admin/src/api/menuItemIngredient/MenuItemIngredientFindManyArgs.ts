import { MenuItemIngredientWhereInput } from "./MenuItemIngredientWhereInput";
import { MenuItemIngredientOrderByInput } from "./MenuItemIngredientOrderByInput";

export type MenuItemIngredientFindManyArgs = {
  where?: MenuItemIngredientWhereInput;
  orderBy?: Array<MenuItemIngredientOrderByInput>;
  skip?: number;
  take?: number;
};
