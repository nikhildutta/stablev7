import { Decimal } from "decimal.js";
import { OptionsAddonsGroupWhereUniqueInput } from "../optionsAddonsGroup/OptionsAddonsGroupWhereUniqueInput";
import { OrderItemsAddonCreateNestedManyWithoutOptionsAddOnsItemsInput } from "./OrderItemsAddonCreateNestedManyWithoutOptionsAddOnsItemsInput";

export type OptionsAddOnsItemCreateInput = {
  addOnName?: string | null;
  addOnPrice?: Decimal | null;
  addonsImageUrl?: string | null;
  containsEgg?: boolean | null;
  isVegetarian?: boolean | null;
  optionsAddonsGroup: OptionsAddonsGroupWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonCreateNestedManyWithoutOptionsAddOnsItemsInput;
  updatedAt?: Date | null;
};
