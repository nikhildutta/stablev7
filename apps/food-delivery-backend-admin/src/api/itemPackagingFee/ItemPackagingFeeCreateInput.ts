import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ItemPackagingFeeCreateInput = {
  menuItems: MenuItemWhereUniqueInput;
  packingFee?: Decimal | null;
};
