import { OrderItemsRating as TOrderItemsRating } from "../api/orderItemsRating/OrderItemsRating";

export const ORDERITEMSRATING_TITLE_FIELD = "id";

export const OrderItemsRatingTitle = (record: TOrderItemsRating): string => {
  return record.id?.toString() || String(record.id);
};
