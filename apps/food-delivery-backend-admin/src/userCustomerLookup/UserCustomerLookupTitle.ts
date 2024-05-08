import { UserCustomerLookup as TUserCustomerLookup } from "../api/userCustomerLookup/UserCustomerLookup";

export const USERCUSTOMERLOOKUP_TITLE_FIELD = "id";

export const UserCustomerLookupTitle = (
  record: TUserCustomerLookup
): string => {
  return record.id?.toString() || String(record.id);
};
