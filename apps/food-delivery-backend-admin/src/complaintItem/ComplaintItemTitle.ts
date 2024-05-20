import { ComplaintItem as TComplaintItem } from "../api/complaintItem/ComplaintItem";

export const COMPLAINTITEM_TITLE_FIELD = "id";

export const ComplaintItemTitle = (record: TComplaintItem): string => {
  return record.id?.toString() || String(record.id);
};
