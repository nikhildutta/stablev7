import { ContactHashtagsMap as TContactHashtagsMap } from "../api/contactHashtagsMap/ContactHashtagsMap";

export const CONTACTHASHTAGSMAP_TITLE_FIELD = "id";

export const ContactHashtagsMapTitle = (
  record: TContactHashtagsMap
): string => {
  return record.id?.toString() || String(record.id);
};
