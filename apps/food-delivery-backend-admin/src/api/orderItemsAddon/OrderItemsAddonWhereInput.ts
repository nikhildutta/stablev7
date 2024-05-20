import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionsAddOnsItemWhereUniqueInput } from "../optionsAddOnsItem/OptionsAddOnsItemWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemsAddonWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  optionsAddOnsItem?: OptionsAddOnsItemWhereUniqueInput;
  orderItems?: OrderItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
