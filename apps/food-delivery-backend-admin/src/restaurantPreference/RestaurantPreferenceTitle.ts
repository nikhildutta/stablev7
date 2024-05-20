import { RestaurantPreference as TRestaurantPreference } from "../api/restaurantPreference/RestaurantPreference";

export const RESTAURANTPREFERENCE_TITLE_FIELD = "preferenceType";

export const RestaurantPreferenceTitle = (
  record: TRestaurantPreference
): string => {
  return record.preferenceType?.toString() || String(record.id);
};
