import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type AccountRestaurantLookupUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  restaurants?: RestaurantWhereUniqueInput;
};
