import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "restaurantIconUrl";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.restaurantIconUrl?.toString() || String(record.id);
};
