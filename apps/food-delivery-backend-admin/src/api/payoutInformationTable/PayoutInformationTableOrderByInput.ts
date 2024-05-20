import { SortOrder } from "../../util/SortOrder";

export type PayoutInformationTableOrderByInput = {
  bankAccountNumber?: SortOrder;
  bankIfscCode?: SortOrder;
  createdAt?: SortOrder;
  firstPayoutDate?: SortOrder;
  id?: SortOrder;
  isBankAccountVerified?: SortOrder;
  panNumber?: SortOrder;
  payoutCycleLength?: SortOrder;
  payoutDateOffset?: SortOrder;
  restaurant_id?: SortOrder;
  tanNumber?: SortOrder;
  updatedAt?: SortOrder;
};
