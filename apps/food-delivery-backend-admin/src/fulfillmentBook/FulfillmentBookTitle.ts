import { FulfillmentBook as TFulfillmentBook } from "../api/fulfillmentBook/FulfillmentBook";

export const FULFILLMENTBOOK_TITLE_FIELD = "acceptedOrderBy";

export const FulfillmentBookTitle = (record: TFulfillmentBook): string => {
  return record.acceptedOrderBy?.toString() || String(record.id);
};
