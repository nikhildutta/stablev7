import { ComboGroupWhereUniqueInput } from "../comboGroup/ComboGroupWhereUniqueInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type ComboItemTableUpdateInput = {
  comboGroups?: ComboGroupWhereUniqueInput;
  isAddonAllowed?: boolean | null;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: Date | null;
};
