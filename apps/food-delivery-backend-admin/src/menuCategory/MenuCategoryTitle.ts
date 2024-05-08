import { MenuCategory as TMenuCategory } from "../api/menuCategory/MenuCategory";

export const MENUCATEGORY_TITLE_FIELD = "name";

export const MenuCategoryTitle = (record: TMenuCategory): string => {
  return record.name?.toString() || String(record.id);
};
