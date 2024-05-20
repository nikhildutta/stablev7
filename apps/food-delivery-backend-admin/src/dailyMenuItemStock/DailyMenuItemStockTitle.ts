import { DailyMenuItemStock as TDailyMenuItemStock } from "../api/dailyMenuItemStock/DailyMenuItemStock";

export const DAILYMENUITEMSTOCK_TITLE_FIELD = "id";

export const DailyMenuItemStockTitle = (
  record: TDailyMenuItemStock
): string => {
  return record.id?.toString() || String(record.id);
};
