import { Decimal } from "decimal.js";
import { OptionsAddonsGroupWhereUniqueInput } from "../optionsAddonsGroup/OptionsAddonsGroupWhereUniqueInput";
import { OrderItemsAddonUpdateManyWithoutOptionsAddOnsItemsInput } from "./OrderItemsAddonUpdateManyWithoutOptionsAddOnsItemsInput";

export type OptionsAddOnsItemUpdateInput = {
  addOnName?: string | null;
  addOnPrice?: Decimal | null;
  addonsImageUrl?: string | null;
  containsEgg?: boolean | null;
  isVegetarian?: boolean | null;
  optionsAddonsGroup?: OptionsAddonsGroupWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonUpdateManyWithoutOptionsAddOnsItemsInput;
  updatedAt?: Date | null;
};
