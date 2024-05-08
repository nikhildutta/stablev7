import { AppUser } from "../appUser/AppUser";
import { FavouriteMenuItem } from "../favouriteMenuItem/FavouriteMenuItem";
import { FavouriteRestaurant } from "../favouriteRestaurant/FavouriteRestaurant";

export type Favourite = {
  appUsers?: AppUser;
  createdAt: Date | null;
  favouriteMenuItems?: Array<FavouriteMenuItem>;
  favouriteRestaurant?: Array<FavouriteRestaurant>;
  id: string;
  updatedAt: Date | null;
};
