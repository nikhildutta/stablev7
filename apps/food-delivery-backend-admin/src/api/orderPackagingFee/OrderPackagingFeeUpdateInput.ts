import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderPackagingFeeUpdateInput = {
  packingFee?: Decimal | null;
  restaurants?: RestaurantWhereUniqueInput;
};
