import { OptionsAddonsGroup as TOptionsAddonsGroup } from "../api/optionsAddonsGroup/OptionsAddonsGroup";

export const OPTIONSADDONSGROUP_TITLE_FIELD = "addOnName";

export const OptionsAddonsGroupTitle = (
  record: TOptionsAddonsGroup
): string => {
  return record.addOnName?.toString() || String(record.id);
};
