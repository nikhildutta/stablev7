import { SortOrder } from "../../util/SortOrder";

export type DailyMenuItemStockOrderByInput = {
  availableStock?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  menu_item_id?: SortOrder;
  totalStock?: SortOrder;
  updatedAt?: SortOrder;
};
