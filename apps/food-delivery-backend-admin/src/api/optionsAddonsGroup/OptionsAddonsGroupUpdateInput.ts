import { OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput } from "./OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupUpdateInput = {
  addOnGroupName?: string | null;
  lowerLimit?: number | null;
  optionsAddOnsGroupDescription?: string | null;
  optionsAddOnsItem?: OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
