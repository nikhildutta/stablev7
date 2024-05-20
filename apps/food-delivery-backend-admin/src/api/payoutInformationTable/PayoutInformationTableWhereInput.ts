import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PayoutInformationTableWhereInput = {
  bankAccountNumber?: StringNullableFilter;
  bankIfscCode?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  firstPayoutDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isBankAccountVerified?: BooleanNullableFilter;
  panNumber?: StringFilter;
  payoutCycleLength?: IntNullableFilter;
  payoutDateOffset?: IntNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  tanNumber?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
