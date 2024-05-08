import { PaymentsBook as TPaymentsBook } from "../api/paymentsBook/PaymentsBook";

export const PAYMENTSBOOK_TITLE_FIELD = "paymentCurrency";

export const PaymentsBookTitle = (record: TPaymentsBook): string => {
  return record.paymentCurrency?.toString() || String(record.id);
};
