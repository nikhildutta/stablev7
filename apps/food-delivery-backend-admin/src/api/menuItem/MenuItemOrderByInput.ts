import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  availableQuantity?: SortOrder;
  basePrice?: SortOrder;
  containsEgg?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  ingredients?: SortOrder;
  isActive?: SortOrder;
  isDeliverable?: SortOrder;
  isDineinAvailable?: SortOrder;
  isLimitedStock?: SortOrder;
  isPickup?: SortOrder;
  isVegetarian?: SortOrder;
  menu_sub_id?: SortOrder;
  name?: SortOrder;
  preparationTime?: SortOrder;
  shareSlug?: SortOrder;
  updatedAt?: SortOrder;
};
