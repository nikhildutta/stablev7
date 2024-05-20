import { SortOrder } from "../../util/SortOrder";

export type MenuItemOptionOrderByInput = {
  additionalPrice?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  menu_item_options_id?: SortOrder;
  name?: SortOrder;
  optionImageUrl?: SortOrder;
  updatedAt?: SortOrder;
};
