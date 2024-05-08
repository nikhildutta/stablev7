import { MenuItem } from "../menuItem/MenuItem";
import { TimeWindow } from "../timeWindow/TimeWindow";

export type MenuItemsWindowMap = {
  createdAt: Date | null;
  id: string;
  is247: boolean | null;
  menuItems?: MenuItem;
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
