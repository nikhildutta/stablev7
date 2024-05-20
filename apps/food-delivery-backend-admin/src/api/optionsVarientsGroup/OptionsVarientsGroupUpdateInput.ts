import { MenuItemOptionWhereUniqueInput } from "../menuItemOption/MenuItemOptionWhereUniqueInput";
import { OptionsVarientsItemUpdateManyWithoutOptionsVarientsGroupsInput } from "./OptionsVarientsItemUpdateManyWithoutOptionsVarientsGroupsInput";

export type OptionsVarientsGroupUpdateInput = {
  menuItemOptions?: MenuItemOptionWhereUniqueInput;
  optionsVarientsItem?: OptionsVarientsItemUpdateManyWithoutOptionsVarientsGroupsInput;
  optionVariantGroupName?: string | null;
  updatedAt?: Date | null;
  variantGroupDescription?: string | null;
};
