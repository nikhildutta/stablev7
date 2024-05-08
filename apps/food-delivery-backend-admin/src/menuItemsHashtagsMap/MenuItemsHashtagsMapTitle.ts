import { MenuItemsHashtagsMap as TMenuItemsHashtagsMap } from "../api/menuItemsHashtagsMap/MenuItemsHashtagsMap";

export const MENUITEMSHASHTAGSMAP_TITLE_FIELD = "id";

export const MenuItemsHashtagsMapTitle = (
  record: TMenuItemsHashtagsMap
): string => {
  return record.id?.toString() || String(record.id);
};
