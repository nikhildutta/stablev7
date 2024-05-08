import { FavouriteMenuItem as TFavouriteMenuItem } from "../api/favouriteMenuItem/FavouriteMenuItem";

export const FAVOURITEMENUITEM_TITLE_FIELD = "id";

export const FavouriteMenuItemTitle = (record: TFavouriteMenuItem): string => {
  return record.id?.toString() || String(record.id);
};
