import { OrderHistory as TOrderHistory } from "../api/orderHistory/OrderHistory";

export const ORDERHISTORY_TITLE_FIELD = "preparationInstruction";

export const OrderHistoryTitle = (record: TOrderHistory): string => {
  return record.preparationInstruction?.toString() || String(record.id);
};
