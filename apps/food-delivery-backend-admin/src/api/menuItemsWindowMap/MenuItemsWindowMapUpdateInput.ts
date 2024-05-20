import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type MenuItemsWindowMapUpdateInput = {
  is247?: boolean | null;
  menuItems?: MenuItemWhereUniqueInput;
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
