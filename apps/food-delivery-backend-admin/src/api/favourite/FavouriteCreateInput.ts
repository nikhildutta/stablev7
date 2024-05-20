import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { FavouriteMenuItemCreateNestedManyWithoutFavouritesInput } from "./FavouriteMenuItemCreateNestedManyWithoutFavouritesInput";
import { FavouriteRestaurantCreateNestedManyWithoutFavouritesInput } from "./FavouriteRestaurantCreateNestedManyWithoutFavouritesInput";

export type FavouriteCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  favouriteMenuItems?: FavouriteMenuItemCreateNestedManyWithoutFavouritesInput;
  favouriteRestaurant?: FavouriteRestaurantCreateNestedManyWithoutFavouritesInput;
  updatedAt?: Date | null;
};
