import { Decimal } from "decimal.js";
import { MenuItemsOptionsGroup } from "../menuItemsOptionsGroup/MenuItemsOptionsGroup";
import { OptionsVarientsGroup } from "../optionsVarientsGroup/OptionsVarientsGroup";

export type MenuItemOption = {
  additionalPrice: Decimal | null;
  createdAt: Date | null;
  description: string | null;
  id: string;
  isDefault: boolean | null;
  menuItemsOptionsGroups?: MenuItemsOptionsGroup;
  name: string | null;
  optionImageUrl: string | null;
  optionsVarientsGroup?: Array<OptionsVarientsGroup>;
  updatedAt: Date | null;
};
