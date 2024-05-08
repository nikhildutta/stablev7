import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OptionsAddOnsItemListRelationFilter } from "../optionsAddOnsItem/OptionsAddOnsItemListRelationFilter";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";

export type OptionsAddonsGroupWhereInput = {
  addOnName?: StringNullableFilter;
  addOnPrice?: DecimalNullableFilter;
  addonsImageUrl?: StringNullableFilter;
  containsEgg?: BooleanNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isVegetarian?: BooleanNullableFilter;
  lowerLimit?: IntNullableFilter;
  optionsAddOnsItem?: OptionsAddOnsItemListRelationFilter;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  upperLimit?: IntNullableFilter;
};
