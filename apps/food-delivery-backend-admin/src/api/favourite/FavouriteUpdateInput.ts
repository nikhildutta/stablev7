import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { FavouriteMenuItemUpdateManyWithoutFavouritesInput } from "./FavouriteMenuItemUpdateManyWithoutFavouritesInput";
import { FavouriteRestaurantUpdateManyWithoutFavouritesInput } from "./FavouriteRestaurantUpdateManyWithoutFavouritesInput";

export type FavouriteUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  favouriteMenuItems?: FavouriteMenuItemUpdateManyWithoutFavouritesInput;
  favouriteRestaurant?: FavouriteRestaurantUpdateManyWithoutFavouritesInput;
  updatedAt?: Date | null;
};
