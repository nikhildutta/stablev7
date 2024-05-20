import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderPackagingFeeWhereInput = {
  id?: StringFilter;
  packingFee?: DecimalNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
};
