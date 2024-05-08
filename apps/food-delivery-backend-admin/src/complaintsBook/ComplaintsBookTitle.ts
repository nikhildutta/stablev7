import { ComplaintsBook as TComplaintsBook } from "../api/complaintsBook/ComplaintsBook";

export const COMPLAINTSBOOK_TITLE_FIELD = "issueDescription";

export const ComplaintsBookTitle = (record: TComplaintsBook): string => {
  return record.issueDescription?.toString() || String(record.id);
};
