import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  customizationOptions?: SortOrder;
  id?: SortOrder;
  option_variant_id?: SortOrder;
  order_id?: SortOrder;
  quantity?: SortOrder;
};
