import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DailyMenuItemStockWhereInput = {
  availableStock?: IntNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
  totalStock?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
