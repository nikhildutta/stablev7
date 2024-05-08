import { ContactDetail as TContactDetail } from "../api/contactDetail/ContactDetail";

export const CONTACTDETAIL_TITLE_FIELD = "contactName";

export const ContactDetailTitle = (record: TContactDetail): string => {
  return record.contactName?.toString() || String(record.id);
};
