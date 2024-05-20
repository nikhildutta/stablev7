import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type ItemPackagingFeeWhereInput = {
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
  packingFee?: DecimalNullableFilter;
};
