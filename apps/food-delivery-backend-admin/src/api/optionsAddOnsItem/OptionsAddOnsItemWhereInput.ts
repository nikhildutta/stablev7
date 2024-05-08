import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionsAddonsGroupWhereUniqueInput } from "../optionsAddonsGroup/OptionsAddonsGroupWhereUniqueInput";
import { OrderItemsAddonListRelationFilter } from "../orderItemsAddon/OrderItemsAddonListRelationFilter";

export type OptionsAddOnsItemWhereInput = {
  addOnName?: StringNullableFilter;
  addOnPrice?: DecimalNullableFilter;
  addonsImageUrl?: StringNullableFilter;
  containsEgg?: BooleanNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isVegetarian?: BooleanNullableFilter;
  optionsAddonsGroup?: OptionsAddonsGroupWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
