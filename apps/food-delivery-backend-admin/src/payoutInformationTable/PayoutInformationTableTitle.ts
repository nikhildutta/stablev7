import { PayoutInformationTable as TPayoutInformationTable } from "../api/payoutInformationTable/PayoutInformationTable";

export const PAYOUTINFORMATIONTABLE_TITLE_FIELD = "bankAccountNumber";

export const PayoutInformationTableTitle = (
  record: TPayoutInformationTable
): string => {
  return record.bankAccountNumber?.toString() || String(record.id);
};
