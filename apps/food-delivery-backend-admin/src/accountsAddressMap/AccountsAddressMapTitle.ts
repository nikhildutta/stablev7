import { AccountsAddressMap as TAccountsAddressMap } from "../api/accountsAddressMap/AccountsAddressMap";

export const ACCOUNTSADDRESSMAP_TITLE_FIELD = "id";

export const AccountsAddressMapTitle = (
  record: TAccountsAddressMap
): string => {
  return record.id?.toString() || String(record.id);
};
