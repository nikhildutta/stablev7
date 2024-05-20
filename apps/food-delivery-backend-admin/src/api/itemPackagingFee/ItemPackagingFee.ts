import { MenuItem } from "../menuItem/MenuItem";
import { Decimal } from "decimal.js";

export type ItemPackagingFee = {
  id: string;
  menuItems?: MenuItem;
  packingFee: Decimal | null;
};
