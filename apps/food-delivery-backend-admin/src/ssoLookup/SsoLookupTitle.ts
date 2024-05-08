import { SsoLookup as TSsoLookup } from "../api/ssoLookup/SsoLookup";

export const SSOLOOKUP_TITLE_FIELD = "appleFamilyName";

export const SsoLookupTitle = (record: TSsoLookup): string => {
  return record.appleFamilyName?.toString() || String(record.id);
};
