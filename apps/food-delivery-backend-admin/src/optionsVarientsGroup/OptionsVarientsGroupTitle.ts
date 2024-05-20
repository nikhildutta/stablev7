import { OptionsVarientsGroup as TOptionsVarientsGroup } from "../api/optionsVarientsGroup/OptionsVarientsGroup";

export const OPTIONSVARIENTSGROUP_TITLE_FIELD = "optionVariantGroupName";

export const OptionsVarientsGroupTitle = (
  record: TOptionsVarientsGroup
): string => {
  return record.optionVariantGroupName?.toString() || String(record.id);
};
