import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DiscountMenuItemCreateInput = {
  discount: DiscountWhereUniqueInput;
  menuItems: MenuItemWhereUniqueInput;
  updatedAt?: Date | null;
};
