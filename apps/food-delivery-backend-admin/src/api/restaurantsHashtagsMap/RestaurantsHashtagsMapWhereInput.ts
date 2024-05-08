import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantsHashtagsMapWhereInput = {
  hashtags?: HashtagWhereUniqueInput;
  id?: StringFilter;
  restaurants?: RestaurantWhereUniqueInput;
};
