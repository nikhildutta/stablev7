import { Favourite } from "../favourite/Favourite";
import { Restaurant } from "../restaurant/Restaurant";

export type FavouriteRestaurant = {
  createdAt: Date | null;
  favourites?: Favourite;
  id: string;
  restaurants?: Restaurant;
};
