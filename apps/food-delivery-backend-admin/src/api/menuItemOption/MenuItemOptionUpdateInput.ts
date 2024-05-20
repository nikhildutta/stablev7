import { Decimal } from "decimal.js";
import { MenuItemsOptionsGroupWhereUniqueInput } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupWhereUniqueInput";
import { OptionsVarientsGroupUpdateManyWithoutMenuItemOptionsInput } from "./OptionsVarientsGroupUpdateManyWithoutMenuItemOptionsInput";

export type MenuItemOptionUpdateInput = {
  additionalPrice?: Decimal | null;
  description?: string | null;
  isDefault?: boolean | null;
  menuItemsOptionsGroups?: MenuItemsOptionsGroupWhereUniqueInput;
  name?: string | null;
  optionImageUrl?: string | null;
  optionsVarientsGroup?: OptionsVarientsGroupUpdateManyWithoutMenuItemOptionsInput;
  updatedAt?: Date | null;
};
