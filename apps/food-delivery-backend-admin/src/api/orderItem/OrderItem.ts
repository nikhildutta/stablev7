import { ComplaintItem } from "../complaintItem/ComplaintItem";
import { OptionsVarientsItem } from "../optionsVarientsItem/OptionsVarientsItem";
import { OrderHistory } from "../orderHistory/OrderHistory";
import { OrderItemsAddon } from "../orderItemsAddon/OrderItemsAddon";
import { OrderItemsRating } from "../orderItemsRating/OrderItemsRating";

export type OrderItem = {
  complaintItem?: Array<ComplaintItem>;
  createdAt: Date | null;
  customizationOptions: string | null;
  id: string;
  optionsVarientsItem?: OptionsVarientsItem;
  orderHistory?: OrderHistory;
  orderItemsAddons?: Array<OrderItemsAddon>;
  orderItemsRatings?: Array<OrderItemsRating>;
  quantity: number | null;
};
