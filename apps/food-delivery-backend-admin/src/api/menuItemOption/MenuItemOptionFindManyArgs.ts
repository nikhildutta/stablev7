import { MenuItemOptionWhereInput } from "./MenuItemOptionWhereInput";
import { MenuItemOptionOrderByInput } from "./MenuItemOptionOrderByInput";

export type MenuItemOptionFindManyArgs = {
  where?: MenuItemOptionWhereInput;
  orderBy?: Array<MenuItemOptionOrderByInput>;
  skip?: number;
  take?: number;
};
