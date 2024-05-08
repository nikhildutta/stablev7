import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type AccountRestaurantLookupCreateInput = {
  accounts: AccountWhereUniqueInput;
  restaurants: RestaurantWhereUniqueInput;
};
