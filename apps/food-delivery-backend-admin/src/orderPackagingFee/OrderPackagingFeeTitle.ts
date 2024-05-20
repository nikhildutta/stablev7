import { OrderPackagingFee as TOrderPackagingFee } from "../api/orderPackagingFee/OrderPackagingFee";

export const ORDERPACKAGINGFEE_TITLE_FIELD = "id";

export const OrderPackagingFeeTitle = (record: TOrderPackagingFee): string => {
  return record.id?.toString() || String(record.id);
};
