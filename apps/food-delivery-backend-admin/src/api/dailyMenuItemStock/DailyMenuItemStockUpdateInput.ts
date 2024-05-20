import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DailyMenuItemStockUpdateInput = {
  availableStock?: number | null;
  menuItems?: MenuItemWhereUniqueInput;
  totalStock?: number | null;
  updatedAt?: Date | null;
};
