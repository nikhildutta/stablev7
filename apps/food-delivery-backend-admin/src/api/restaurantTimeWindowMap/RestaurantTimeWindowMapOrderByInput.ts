import { SortOrder } from "../../util/SortOrder";

export type RestaurantTimeWindowMapOrderByInput = {
  createdAt?: SortOrder;
  day_of_the_week?: SortOrder;
  id?: SortOrder;
  restaurant_id?: SortOrder;
  time_window_id?: SortOrder;
  updatedAt?: SortOrder;
};
