import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "customizationOptions";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.customizationOptions?.toString() || String(record.id);
};
