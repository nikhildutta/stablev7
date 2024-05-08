import { OptionsAddOnsItemWhereUniqueInput } from "../optionsAddOnsItem/OptionsAddOnsItemWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type OrderItemsAddonUpdateInput = {
  optionsAddOnsItem?: OptionsAddOnsItemWhereUniqueInput;
  orderItems?: OrderItemWhereUniqueInput;
  quantity?: number | null;
  updatedAt?: Date | null;
};
