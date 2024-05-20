import { SortOrder } from "../../util/SortOrder";

export type TimeWindowOrderByInput = {
  id?: SortOrder;
  windowEnd?: SortOrder;
  windowStart?: SortOrder;
};
