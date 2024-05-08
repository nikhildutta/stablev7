import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { SettlementsBreakupListRelationFilter } from "../settlementsBreakup/SettlementsBreakupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PayoutCycleWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  netPayout?: DecimalNullableFilter;
  numberOfOrders?: IntNullableFilter;
  payout_status?:
    | "Cycle_Inprogress"
    | "Cycle_Complete"
    | "Statement_Generated"
    | "Payout_In_Process"
    | "Settled";
  restaurants?: RestaurantWhereUniqueInput;
  settlementsBreakup?: SettlementsBreakupListRelationFilter;
  timePeriodEnd?: DateTimeNullableFilter;
  timePeriodStart?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  utrNumber?: StringNullableFilter;
  weekNumber?: IntNullableFilter;
};
