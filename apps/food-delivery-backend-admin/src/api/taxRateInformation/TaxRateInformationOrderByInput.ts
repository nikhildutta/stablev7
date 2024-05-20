import { SortOrder } from "../../util/SortOrder";

export type TaxRateInformationOrderByInput = {
  cgstRate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  netTaxTransferrable?: SortOrder;
  restaurant_id?: SortOrder;
  sgstRate?: SortOrder;
  updatedAt?: SortOrder;
};
