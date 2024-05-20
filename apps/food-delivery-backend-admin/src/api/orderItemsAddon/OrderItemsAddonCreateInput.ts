import { OptionsAddOnsItemWhereUniqueInput } from "../optionsAddOnsItem/OptionsAddOnsItemWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type OrderItemsAddonCreateInput = {
  optionsAddOnsItem: OptionsAddOnsItemWhereUniqueInput;
  orderItems: OrderItemWhereUniqueInput;
  quantity?: number | null;
  updatedAt?: Date | null;
};
