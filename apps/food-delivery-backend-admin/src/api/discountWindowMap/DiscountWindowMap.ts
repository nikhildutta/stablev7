import { Discount } from "../discount/Discount";
import { TimeWindow } from "../timeWindow/TimeWindow";

export type DiscountWindowMap = {
  createdAt: Date | null;
  discount?: Discount;
  id: string;
  is247: boolean | null;
  timeWindow?: TimeWindow;
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
  updatedAt: Date | null;
};
