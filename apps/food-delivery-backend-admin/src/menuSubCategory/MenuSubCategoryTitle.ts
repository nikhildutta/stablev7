import { MenuSubCategory as TMenuSubCategory } from "../api/menuSubCategory/MenuSubCategory";

export const MENUSUBCATEGORY_TITLE_FIELD = "name";

export const MenuSubCategoryTitle = (record: TMenuSubCategory): string => {
  return record.name?.toString() || String(record.id);
};
