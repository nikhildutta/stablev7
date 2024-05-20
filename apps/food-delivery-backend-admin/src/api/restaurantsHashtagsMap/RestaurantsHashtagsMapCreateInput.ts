import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantsHashtagsMapCreateInput = {
  hashtags: HashtagWhereUniqueInput;
  restaurants: RestaurantWhereUniqueInput;
};
