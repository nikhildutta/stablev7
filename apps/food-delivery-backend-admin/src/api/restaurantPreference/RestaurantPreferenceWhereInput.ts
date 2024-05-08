import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPreferenceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  preferenceType?: StringNullableFilter;
  preferenceValue?: StringNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
