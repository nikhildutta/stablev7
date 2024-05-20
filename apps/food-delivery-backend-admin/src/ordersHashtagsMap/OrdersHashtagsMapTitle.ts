import { OrdersHashtagsMap as TOrdersHashtagsMap } from "../api/ordersHashtagsMap/OrdersHashtagsMap";

export const ORDERSHASHTAGSMAP_TITLE_FIELD = "id";

export const OrdersHashtagsMapTitle = (record: TOrdersHashtagsMap): string => {
  return record.id?.toString() || String(record.id);
};
