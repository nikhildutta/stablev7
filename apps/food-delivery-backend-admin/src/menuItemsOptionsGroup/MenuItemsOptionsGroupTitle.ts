import { MenuItemsOptionsGroup as TMenuItemsOptionsGroup } from "../api/menuItemsOptionsGroup/MenuItemsOptionsGroup";

export const MENUITEMSOPTIONSGROUP_TITLE_FIELD = "optionGroupName";

export const MenuItemsOptionsGroupTitle = (
  record: TMenuItemsOptionsGroup
): string => {
  return record.optionGroupName?.toString() || String(record.id);
};
