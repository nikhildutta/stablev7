import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavouriteWhereUniqueInput } from "../favourite/FavouriteWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavouriteRestaurantWhereInput = {
  createdAt?: DateTimeNullableFilter;
  favourites?: FavouriteWhereUniqueInput;
  id?: StringFilter;
  restaurants?: RestaurantWhereUniqueInput;
};
