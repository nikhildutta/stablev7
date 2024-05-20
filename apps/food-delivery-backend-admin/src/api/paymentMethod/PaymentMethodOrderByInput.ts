import { SortOrder } from "../../util/SortOrder";

export type PaymentMethodOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  methodDetails?: SortOrder;
  methodName?: SortOrder;
  updatedAt?: SortOrder;
};
