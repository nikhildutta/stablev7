import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavouriteMenuItemUpdateInput = {
  favourites?: FavouriteWhereUniqueInput;
  menuItems?: MenuItemWhereUniqueInput;
};
