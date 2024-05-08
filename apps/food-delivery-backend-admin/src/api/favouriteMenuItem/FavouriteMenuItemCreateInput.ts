import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavouriteMenuItemCreateInput = {
  favourites: FavouriteWhereUniqueInput;
  menuItems: MenuItemWhereUniqueInput;
};
