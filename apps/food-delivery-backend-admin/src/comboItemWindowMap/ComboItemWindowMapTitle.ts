import { ComboItemWindowMap as TComboItemWindowMap } from "../api/comboItemWindowMap/ComboItemWindowMap";

export const COMBOITEMWINDOWMAP_TITLE_FIELD = "id";

export const ComboItemWindowMapTitle = (
  record: TComboItemWindowMap
): string => {
  return record.id?.toString() || String(record.id);
};
