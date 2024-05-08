import { Decimal } from "decimal.js";
import { MenuItemsOptionsGroupWhereUniqueInput } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupWhereUniqueInput";
import { OptionsVarientsGroupCreateNestedManyWithoutMenuItemOptionsInput } from "./OptionsVarientsGroupCreateNestedManyWithoutMenuItemOptionsInput";

export type MenuItemOptionCreateInput = {
  additionalPrice?: Decimal | null;
  description?: string | null;
  isDefault?: boolean | null;
  menuItemsOptionsGroups: MenuItemsOptionsGroupWhereUniqueInput;
  name?: string | null;
  optionImageUrl?: string | null;
  optionsVarientsGroup?: OptionsVarientsGroupCreateNestedManyWithoutMenuItemOptionsInput;
  updatedAt?: Date | null;
};
