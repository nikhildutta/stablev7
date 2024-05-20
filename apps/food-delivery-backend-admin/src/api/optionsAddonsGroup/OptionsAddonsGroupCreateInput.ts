import { OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput } from "./OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupCreateInput = {
  addOnGroupName?: string | null;
  lowerLimit?: number | null;
  optionsAddOnsGroupDescription?: string | null;
  optionsAddOnsItem?: OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput;
  optionsVarientsItem: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
