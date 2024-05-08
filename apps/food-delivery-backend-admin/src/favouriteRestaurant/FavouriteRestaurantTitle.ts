import { FavouriteRestaurant as TFavouriteRestaurant } from "../api/favouriteRestaurant/FavouriteRestaurant";

export const FAVOURITERESTAURANT_TITLE_FIELD = "id";

export const FavouriteRestaurantTitle = (
  record: TFavouriteRestaurant
): string => {
  return record.id?.toString() || String(record.id);
};
