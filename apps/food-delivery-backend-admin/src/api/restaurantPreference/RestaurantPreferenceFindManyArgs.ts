import { RestaurantPreferenceWhereInput } from "./RestaurantPreferenceWhereInput";
import { RestaurantPreferenceOrderByInput } from "./RestaurantPreferenceOrderByInput";

export type RestaurantPreferenceFindManyArgs = {
  where?: RestaurantPreferenceWhereInput;
  orderBy?: Array<RestaurantPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
