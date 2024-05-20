import { OptionsAddonsGroup as TOptionsAddonsGroup } from "../api/optionsAddonsGroup/OptionsAddonsGroup";

export const OPTIONSADDONSGROUP_TITLE_FIELD = "addOnGroupName";

export const OptionsAddonsGroupTitle = (
  record: TOptionsAddonsGroup
): string => {
  return record.addOnGroupName?.toString() || String(record.id);
};
