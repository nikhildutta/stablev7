import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantsHashtagsMapUpdateInput = {
  hashtags?: HashtagWhereUniqueInput;
  restaurants?: RestaurantWhereUniqueInput;
};
