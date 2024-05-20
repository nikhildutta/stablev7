import { TimeWindow as TTimeWindow } from "../api/timeWindow/TimeWindow";

export const TIMEWINDOW_TITLE_FIELD = "id";

export const TimeWindowTitle = (record: TTimeWindow): string => {
  return record.id?.toString() || String(record.id);
};
