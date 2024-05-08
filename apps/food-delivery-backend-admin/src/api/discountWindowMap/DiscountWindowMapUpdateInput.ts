import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type DiscountWindowMapUpdateInput = {
  discount?: DiscountWhereUniqueInput;
  is247?: boolean | null;
  timeWindow?: TimeWindowWhereUniqueInput;
  time_window_day?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "All_Days"
    | null;
  updatedAt?: Date | null;
};
