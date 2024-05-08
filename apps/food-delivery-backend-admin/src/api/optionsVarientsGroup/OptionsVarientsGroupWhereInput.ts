import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemOptionWhereUniqueInput } from "../menuItemOption/MenuItemOptionWhereUniqueInput";
import { OptionsVarientsItemListRelationFilter } from "../optionsVarientsItem/OptionsVarientsItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OptionsVarientsGroupWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  menuItemOptions?: MenuItemOptionWhereUniqueInput;
  optionsVarientsItem?: OptionsVarientsItemListRelationFilter;
  optionVariantGroupName?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  variantGroupDescription?: StringNullableFilter;
};
