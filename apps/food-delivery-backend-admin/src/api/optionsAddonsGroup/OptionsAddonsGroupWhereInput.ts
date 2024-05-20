import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OptionsAddOnsItemListRelationFilter } from "../optionsAddOnsItem/OptionsAddOnsItemListRelationFilter";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupWhereInput = {
  addOnGroupName?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lowerLimit?: IntNullableFilter;
  optionsAddOnsGroupDescription?: StringNullableFilter;
  optionsAddOnsItem?: OptionsAddOnsItemListRelationFilter;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  upperLimit?: IntNullableFilter;
};
