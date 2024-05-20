import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPreferenceUpdateInput = {
  preferenceType?: string | null;
  preferenceValue?: string | null;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
