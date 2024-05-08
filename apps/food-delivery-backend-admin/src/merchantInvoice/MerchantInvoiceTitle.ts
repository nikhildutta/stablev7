import { MerchantInvoice as TMerchantInvoice } from "../api/merchantInvoice/MerchantInvoice";

export const MERCHANTINVOICE_TITLE_FIELD = "id";

export const MerchantInvoiceTitle = (record: TMerchantInvoice): string => {
  return record.id?.toString() || String(record.id);
};
