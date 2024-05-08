import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ItemPackagingFeeUpdateInput = {
  menuItems?: MenuItemWhereUniqueInput;
  packingFee?: Decimal | null;
};
