import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavouriteRestaurantCreateInput = {
  favourites: FavouriteWhereUniqueInput;
  restaurants: RestaurantWhereUniqueInput;
};
