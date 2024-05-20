import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  averageCost?: SortOrder;
  closure_status?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDelivery?: SortOrder;
  isDineIn?: SortOrder;
  isHidden?: SortOrder;
  isTakeaway?: SortOrder;
  packaging_fee_type?: SortOrder;
  restaurantIconUrl?: SortOrder;
  restaurantIdRef?: SortOrder;
  shareSlug?: SortOrder;
  updatedAt?: SortOrder;
};
