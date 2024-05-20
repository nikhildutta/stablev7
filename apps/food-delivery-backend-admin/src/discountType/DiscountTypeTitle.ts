import { DiscountType as TDiscountType } from "../api/discountType/DiscountType";

export const DISCOUNTTYPE_TITLE_FIELD = "discountType";

export const DiscountTypeTitle = (record: TDiscountType): string => {
  return record.discountType?.toString() || String(record.id);
};
