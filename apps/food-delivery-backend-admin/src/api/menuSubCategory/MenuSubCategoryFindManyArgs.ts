import { MenuSubCategoryWhereInput } from "./MenuSubCategoryWhereInput";
import { MenuSubCategoryOrderByInput } from "./MenuSubCategoryOrderByInput";

export type MenuSubCategoryFindManyArgs = {
  where?: MenuSubCategoryWhereInput;
  orderBy?: Array<MenuSubCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
