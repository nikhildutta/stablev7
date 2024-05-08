import { Discount } from "../discount/Discount";
import { MenuItem } from "../menuItem/MenuItem";

export type DiscountMenuItem = {
  createdAt: Date | null;
  discount?: Discount;
  id: string;
  menuItems?: MenuItem;
  updatedAt: Date | null;
};
