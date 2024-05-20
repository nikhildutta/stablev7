import { DiscountWindowMap as TDiscountWindowMap } from "../api/discountWindowMap/DiscountWindowMap";

export const DISCOUNTWINDOWMAP_TITLE_FIELD = "id";

export const DiscountWindowMapTitle = (record: TDiscountWindowMap): string => {
  return record.id?.toString() || String(record.id);
};
