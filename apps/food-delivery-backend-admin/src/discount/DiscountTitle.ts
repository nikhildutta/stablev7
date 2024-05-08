import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "typeOfDiscount";

export const DiscountTitle = (record: TDiscount): string => {
  return record.typeOfDiscount?.toString() || String(record.id);
};
