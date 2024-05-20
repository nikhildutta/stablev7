import { OptionsVarientsItem as TOptionsVarientsItem } from "../api/optionsVarientsItem/OptionsVarientsItem";

export const OPTIONSVARIENTSITEM_TITLE_FIELD = "variantName";

export const OptionsVarientsItemTitle = (
  record: TOptionsVarientsItem
): string => {
  return record.variantName?.toString() || String(record.id);
};
