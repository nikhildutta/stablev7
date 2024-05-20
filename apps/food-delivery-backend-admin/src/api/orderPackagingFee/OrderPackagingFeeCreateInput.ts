import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderPackagingFeeCreateInput = {
  packingFee?: Decimal | null;
  restaurants: RestaurantWhereUniqueInput;
};
