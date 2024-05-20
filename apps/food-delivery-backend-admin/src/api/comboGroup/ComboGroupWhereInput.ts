import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ComboItemTableListRelationFilter } from "../comboItemTable/ComboItemTableListRelationFilter";
import { ComboItemWindowMapListRelationFilter } from "../comboItemWindowMap/ComboItemWindowMapListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ComboGroupWhereInput = {
  comboBasePrice?: DecimalNullableFilter;
  comboDescription?: StringNullableFilter;
  comboItemTable?: ComboItemTableListRelationFilter;
  comboItemWindowMap?: ComboItemWindowMapListRelationFilter;
  comboName?: StringFilter;
  combo_type?: "Default" | "Customizable";
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isBankCoupon?: BooleanNullableFilter;
  isPlatformCoupon?: BooleanNullableFilter;
  isRestuaruantCoupon?: BooleanNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
