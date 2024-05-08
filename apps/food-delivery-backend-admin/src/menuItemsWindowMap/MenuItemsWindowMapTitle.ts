import { MenuItemsWindowMap as TMenuItemsWindowMap } from "../api/menuItemsWindowMap/MenuItemsWindowMap";

export const MENUITEMSWINDOWMAP_TITLE_FIELD = "id";

export const MenuItemsWindowMapTitle = (
  record: TMenuItemsWindowMap
): string => {
  return record.id?.toString() || String(record.id);
};
