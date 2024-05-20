import { MenuCategoryWhereInput } from "./MenuCategoryWhereInput";
import { MenuCategoryOrderByInput } from "./MenuCategoryOrderByInput";

export type MenuCategoryFindManyArgs = {
  where?: MenuCategoryWhereInput;
  orderBy?: Array<MenuCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
