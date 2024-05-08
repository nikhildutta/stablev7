import { ComboGroup as TComboGroup } from "../api/comboGroup/ComboGroup";

export const COMBOGROUP_TITLE_FIELD = "comboName";

export const ComboGroupTitle = (record: TComboGroup): string => {
  return record.comboName?.toString() || String(record.id);
};
