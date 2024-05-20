import { AccountRestaurantLookup as TAccountRestaurantLookup } from "../api/accountRestaurantLookup/AccountRestaurantLookup";

export const ACCOUNTRESTAURANTLOOKUP_TITLE_FIELD = "id";

export const AccountRestaurantLookupTitle = (
  record: TAccountRestaurantLookup
): string => {
  return record.id?.toString() || String(record.id);
};
