import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";
import { SettlementsBreakup } from "../settlementsBreakup/SettlementsBreakup";

export type PayoutCycle = {
  createdAt: Date | null;
  id: string;
  netPayout: Decimal | null;
  numberOfOrders: number | null;
  payout_status?:
    | "Cycle_Inprogress"
    | "Cycle_Complete"
    | "Statement_Generated"
    | "Payout_In_Process"
    | "Settled"
    | null;
  restaurants?: Restaurant;
  settlementsBreakup?: Array<SettlementsBreakup>;
  timePeriodEnd: Date | null;
  timePeriodStart: Date | null;
  updatedAt: Date | null;
  utrNumber: string | null;
  weekNumber: number | null;
};
