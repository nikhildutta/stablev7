import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavouriteMenuItemListRelationFilter } from "../favouriteMenuItem/FavouriteMenuItemListRelationFilter";
import { FavouriteRestaurantListRelationFilter } from "../favouriteRestaurant/FavouriteRestaurantListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FavouriteWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  favouriteMenuItems?: FavouriteMenuItemListRelationFilter;
  favouriteRestaurant?: FavouriteRestaurantListRelationFilter;
  id?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
