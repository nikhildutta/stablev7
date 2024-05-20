import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ComboItemTableListRelationFilter } from "../comboItemTable/ComboItemTableListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OptionsAddonsGroupListRelationFilter } from "../optionsAddonsGroup/OptionsAddonsGroupListRelationFilter";
import { OptionsVarientsGroupWhereUniqueInput } from "../optionsVarientsGroup/OptionsVarientsGroupWhereUniqueInput";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OptionsVarientsItemWhereInput = {
  additionalPrice?: DecimalNullableFilter;
  comboItemTable?: ComboItemTableListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isDefault?: BooleanNullableFilter;
  optionsAddonsGroup?: OptionsAddonsGroupListRelationFilter;
  optionsVarientsGroup?: OptionsVarientsGroupWhereUniqueInput;
  orderItems?: OrderItemListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
  variantDescription?: StringNullableFilter;
  variantImageUrl?: StringNullableFilter;
  variantName?: StringNullableFilter;
};
