import { OptionsAddOnsItem } from "../optionsAddOnsItem/OptionsAddOnsItem";
import { OrderItem } from "../orderItem/OrderItem";

export type OrderItemsAddon = {
  createdAt: Date | null;
  id: string;
  optionsAddOnsItem?: OptionsAddOnsItem;
  orderItems?: OrderItem;
  quantity: number | null;
  updatedAt: Date | null;
};
