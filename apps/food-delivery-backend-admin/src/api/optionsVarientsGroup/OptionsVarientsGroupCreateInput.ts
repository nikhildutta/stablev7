import { MenuItemOptionWhereUniqueInput } from "../menuItemOption/MenuItemOptionWhereUniqueInput";
import { OptionsVarientsItemCreateNestedManyWithoutOptionsVarientsGroupsInput } from "./OptionsVarientsItemCreateNestedManyWithoutOptionsVarientsGroupsInput";

export type OptionsVarientsGroupCreateInput = {
  menuItemOptions: MenuItemOptionWhereUniqueInput;
  optionsVarientsItem?: OptionsVarientsItemCreateNestedManyWithoutOptionsVarientsGroupsInput;
  optionVariantGroupName?: string | null;
  updatedAt?: Date | null;
  variantGroupDescription?: string | null;
};
