import { Decimal } from "decimal.js";
import { OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput } from "./OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupCreateInput = {
  addOnName?: string | null;
  addOnPrice?: Decimal | null;
  addonsImageUrl?: string | null;
  containsEgg?: boolean | null;
  isVegetarian?: boolean | null;
  lowerLimit?: number | null;
  optionsAddOnsItem?: OptionsAddOnsItemCreateNestedManyWithoutOptionsAddonsGroupsInput;
  optionsVarientsItem: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
  upperLimit?: number | null;
};
