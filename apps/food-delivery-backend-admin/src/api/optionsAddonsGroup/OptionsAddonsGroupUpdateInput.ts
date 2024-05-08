import { Decimal } from "decimal.js";
import { OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput } from "./OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupUpdateInput = {
  addOnName?: string | null;
  addOnPrice?: Decimal | null;
  addonsImageUrl?: string | null;
  containsEgg?: boolean | null;
  isVegetarian?: boolean | null;
  lowerLimit?: number | null;
  optionsAddOnsItem?: OptionsAddOnsItemUpdateManyWithoutOptionsAddonsGroupsInput;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
