import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type AccountRestaurantLookupWhereInput = {
  accounts?: AccountWhereUniqueInput;
  id?: StringFilter;
  restaurants?: RestaurantWhereUniqueInput;
};
