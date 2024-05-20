import { OptionsAddOnsItem as TOptionsAddOnsItem } from "../api/optionsAddOnsItem/OptionsAddOnsItem";

export const OPTIONSADDONSITEM_TITLE_FIELD = "addOnName";

export const OptionsAddOnsItemTitle = (record: TOptionsAddOnsItem): string => {
  return record.addOnName?.toString() || String(record.id);
};
