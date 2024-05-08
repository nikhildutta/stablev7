import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type MenuItemsWindowMapWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  is247?: BooleanNullableFilter;
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
    | "All_Days";
  updatedAt?: DateTimeNullableFilter;
};
