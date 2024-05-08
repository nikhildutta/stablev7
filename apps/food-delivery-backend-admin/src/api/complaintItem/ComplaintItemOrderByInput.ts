import { SortOrder } from "../../util/SortOrder";

export type ComplaintItemOrderByInput = {
  complaint_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRefund?: SortOrder;
  order_item_id?: SortOrder;
  updatedAt?: SortOrder;
};
