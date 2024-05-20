import { MenuItemOption } from "../menuItemOption/MenuItemOption";
import { OptionsVarientsItem } from "../optionsVarientsItem/OptionsVarientsItem";

export type OptionsVarientsGroup = {
  createdAt: Date | null;
  id: string;
  menuItemOptions?: MenuItemOption;
  optionsVarientsItem?: Array<OptionsVarientsItem>;
  optionVariantGroupName: string | null;
  updatedAt: Date | null;
  variantGroupDescription: string | null;
};
