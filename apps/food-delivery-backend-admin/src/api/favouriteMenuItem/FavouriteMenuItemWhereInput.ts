import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavouriteMenuItemWhereInput = {
  createdAt?: DateTimeNullableFilter;
  favourites?: FavouriteWhereUniqueInput;
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
};
