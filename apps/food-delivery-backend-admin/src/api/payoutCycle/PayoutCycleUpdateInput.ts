import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { SettlementsBreakupUpdateManyWithoutPayoutCyclesInput } from "./SettlementsBreakupUpdateManyWithoutPayoutCyclesInput";

export type PayoutCycleUpdateInput = {
  netPayout?: Decimal | null;
  numberOfOrders?: number | null;
  payout_status?:
    | "Cycle_Inprogress"
    | "Cycle_Complete"
    | "Statement_Generated"
    | "Payout_In_Process"
    | "Settled"
    | null;
  restaurants?: RestaurantWhereUniqueInput;
  settlementsBreakup?: SettlementsBreakupUpdateManyWithoutPayoutCyclesInput;
  timePeriodEnd?: Date | null;
  timePeriodStart?: Date | null;
  updatedAt?: Date | null;
  utrNumber?: string | null;
  weekNumber?: number | null;
};
