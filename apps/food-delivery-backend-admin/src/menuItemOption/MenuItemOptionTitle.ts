import { MenuItemOption as TMenuItemOption } from "../api/menuItemOption/MenuItemOption";

export const MENUITEMOPTION_TITLE_FIELD = "name";

export const MenuItemOptionTitle = (record: TMenuItemOption): string => {
  return record.name?.toString() || String(record.id);
};
