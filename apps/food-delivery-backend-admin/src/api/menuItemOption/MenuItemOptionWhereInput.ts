import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuItemsOptionsGroupWhereUniqueInput } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupWhereUniqueInput";
import { OptionsVarientsGroupListRelationFilter } from "../optionsVarientsGroup/OptionsVarientsGroupListRelationFilter";

export type MenuItemOptionWhereInput = {
  additionalPrice?: DecimalNullableFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isDefault?: BooleanNullableFilter;
  menuItemsOptionsGroups?: MenuItemsOptionsGroupWhereUniqueInput;
  name?: StringNullableFilter;
  optionImageUrl?: StringNullableFilter;
  optionsVarientsGroup?: OptionsVarientsGroupListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
