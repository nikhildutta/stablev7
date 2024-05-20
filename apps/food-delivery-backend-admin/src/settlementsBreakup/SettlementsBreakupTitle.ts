import { SettlementsBreakup as TSettlementsBreakup } from "../api/settlementsBreakup/SettlementsBreakup";

export const SETTLEMENTSBREAKUP_TITLE_FIELD = "businessname";

export const SettlementsBreakupTitle = (
  record: TSettlementsBreakup
): string => {
  return record.businessname?.toString() || String(record.id);
};
