import { FavouriteRestaurantWhereInput } from "./FavouriteRestaurantWhereInput";
import { FavouriteRestaurantOrderByInput } from "./FavouriteRestaurantOrderByInput";

export type FavouriteRestaurantFindManyArgs = {
  where?: FavouriteRestaurantWhereInput;
  orderBy?: Array<FavouriteRestaurantOrderByInput>;
  skip?: number;
  take?: number;
};
