import { SortOrder } from "../../util/SortOrder";

export type RestaurantPreferenceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  preferenceType?: SortOrder;
  preferenceValue?: SortOrder;
  restaurant_id?: SortOrder;
  updatedAt?: SortOrder;
};
