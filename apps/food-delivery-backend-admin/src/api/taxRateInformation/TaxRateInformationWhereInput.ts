import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TaxRateInformationWhereInput = {
  cgstRate?: DecimalNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  netTaxTransferrable?: BooleanNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  sgstRate?: DecimalNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
