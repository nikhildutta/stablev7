import { RestaurantTimeWindowMap as TRestaurantTimeWindowMap } from "../api/restaurantTimeWindowMap/RestaurantTimeWindowMap";

export const RESTAURANTTIMEWINDOWMAP_TITLE_FIELD = "id";

export const RestaurantTimeWindowMapTitle = (
  record: TRestaurantTimeWindowMap
): string => {
  return record.id?.toString() || String(record.id);
};
