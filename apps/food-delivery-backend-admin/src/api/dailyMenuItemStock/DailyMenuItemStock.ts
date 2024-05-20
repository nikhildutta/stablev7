import { MenuItem } from "../menuItem/MenuItem";

export type DailyMenuItemStock = {
  availableStock: number | null;
  createdAt: Date | null;
  id: string;
  menuItems?: MenuItem;
  totalStock: number | null;
  updatedAt: Date | null;
};
