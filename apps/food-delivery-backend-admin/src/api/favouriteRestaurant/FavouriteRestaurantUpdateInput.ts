import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavouriteRestaurantUpdateInput = {
  favourites?: FavouriteWhereUniqueInput;
  restaurants?: RestaurantWhereUniqueInput;
};
