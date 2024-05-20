import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RestaurantDetailWhereInput = {
  createdAt?: DateTimeNullableFilter;
  deliveryCharge?: DecimalNullableFilter;
  deliveryTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  minOrderValue?: DecimalNullableFilter;
  rating?: DecimalNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  reviewCount?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
