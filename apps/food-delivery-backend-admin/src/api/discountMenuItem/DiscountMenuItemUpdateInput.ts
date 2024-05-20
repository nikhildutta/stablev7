import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DiscountMenuItemUpdateInput = {
  discount?: DiscountWhereUniqueInput;
  menuItems?: MenuItemWhereUniqueInput;
  updatedAt?: Date | null;
};
