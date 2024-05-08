import { RestaurantsHashtagsMap as TRestaurantsHashtagsMap } from "../api/restaurantsHashtagsMap/RestaurantsHashtagsMap";

export const RESTAURANTSHASHTAGSMAP_TITLE_FIELD = "id";

export const RestaurantsHashtagsMapTitle = (
  record: TRestaurantsHashtagsMap
): string => {
  return record.id?.toString() || String(record.id);
};
