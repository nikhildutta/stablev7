import { ComboItemTable as TComboItemTable } from "../api/comboItemTable/ComboItemTable";

export const COMBOITEMTABLE_TITLE_FIELD = "id";

export const ComboItemTableTitle = (record: TComboItemTable): string => {
  return record.id?.toString() || String(record.id);
};
