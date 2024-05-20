import { SortOrder } from "../../util/SortOrder";

export type PaymentsBookOrderByInput = {
  createdAt?: SortOrder;
  errorCode?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  paymentAmount?: SortOrder;
  paymentCurrency?: SortOrder;
  paymentDate?: SortOrder;
  payment_method_id?: SortOrder;
  paymentStatus?: SortOrder;
  updatedAt?: SortOrder;
};
