import { SortOrder } from "../../util/SortOrder";

export type PayoutCycleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  netPayout?: SortOrder;
  numberOfOrders?: SortOrder;
  payout_status?: SortOrder;
  restaurant_id?: SortOrder;
  timePeriodEnd?: SortOrder;
  timePeriodStart?: SortOrder;
  updatedAt?: SortOrder;
  utrNumber?: SortOrder;
  weekNumber?: SortOrder;
};
