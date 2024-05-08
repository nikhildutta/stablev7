import { TaxRateInformation as TTaxRateInformation } from "../api/taxRateInformation/TaxRateInformation";

export const TAXRATEINFORMATION_TITLE_FIELD = "id";

export const TaxRateInformationTitle = (
  record: TTaxRateInformation
): string => {
  return record.id?.toString() || String(record.id);
};
