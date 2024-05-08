import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "businessname";

export const AccountTitle = (record: TAccount): string => {
  return record.businessname?.toString() || String(record.id);
};
