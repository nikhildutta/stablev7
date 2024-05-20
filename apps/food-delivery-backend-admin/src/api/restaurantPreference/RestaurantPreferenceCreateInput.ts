import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPreferenceCreateInput = {
  preferenceType?: string | null;
  preferenceValue?: string | null;
  restaurants: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
