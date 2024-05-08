import { Favourite as TFavourite } from "../api/favourite/Favourite";

export const FAVOURITE_TITLE_FIELD = "id";

export const FavouriteTitle = (record: TFavourite): string => {
  return record.id?.toString() || String(record.id);
};
