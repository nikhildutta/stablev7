import { OrderItemsAddon as TOrderItemsAddon } from "../api/orderItemsAddon/OrderItemsAddon";

export const ORDERITEMSADDON_TITLE_FIELD = "id";

export const OrderItemsAddonTitle = (record: TOrderItemsAddon): string => {
  return record.id?.toString() || String(record.id);
};
