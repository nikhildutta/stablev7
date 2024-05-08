import { ComboGroupWhereUniqueInput } from "../comboGroup/ComboGroupWhereUniqueInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type ComboItemTableCreateInput = {
  comboGroups: ComboGroupWhereUniqueInput;
  isAddonAllowed?: boolean | null;
  optionsVarientsItem: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
};
