import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DiscountMenuItemWhereInput = {
  createdAt?: DateTimeNullableFilter;
  discount?: DiscountWhereUniqueInput;
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
