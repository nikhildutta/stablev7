import { ComboGroupWhereUniqueInput } from "../comboGroup/ComboGroupWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type ComboItemTableWhereInput = {
  comboGroups?: ComboGroupWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isAddonAllowed?: BooleanNullableFilter;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
