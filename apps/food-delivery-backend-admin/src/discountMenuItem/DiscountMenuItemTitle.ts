import { DiscountMenuItem as TDiscountMenuItem } from "../api/discountMenuItem/DiscountMenuItem";

export const DISCOUNTMENUITEM_TITLE_FIELD = "id";

export const DiscountMenuItemTitle = (record: TDiscountMenuItem): string => {
  return record.id?.toString() || String(record.id);
};
