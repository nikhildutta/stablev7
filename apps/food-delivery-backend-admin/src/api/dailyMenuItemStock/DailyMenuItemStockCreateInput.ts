import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type DailyMenuItemStockCreateInput = {
  availableStock?: number | null;
  menuItems: MenuItemWhereUniqueInput;
  totalStock?: number | null;
  updatedAt?: Date | null;
};
