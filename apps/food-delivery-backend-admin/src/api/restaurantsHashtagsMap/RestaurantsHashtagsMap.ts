import { Hashtag } from "../hashtag/Hashtag";
import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantsHashtagsMap = {
  hashtags?: Hashtag;
  id: string;
  restaurants?: Restaurant;
};
