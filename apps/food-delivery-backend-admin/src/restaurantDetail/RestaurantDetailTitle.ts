import { RestaurantDetail as TRestaurantDetail } from "../api/restaurantDetail/RestaurantDetail";

export const RESTAURANTDETAIL_TITLE_FIELD = "description";

export const RestaurantDetailTitle = (record: TRestaurantDetail): string => {
  return record.description?.toString() || String(record.id);
};
