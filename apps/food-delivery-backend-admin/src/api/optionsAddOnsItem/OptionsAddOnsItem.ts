import { Decimal } from "decimal.js";
import { OptionsAddonsGroup } from "../optionsAddonsGroup/OptionsAddonsGroup";
import { OrderItemsAddon } from "../orderItemsAddon/OrderItemsAddon";

export type OptionsAddOnsItem = {
  addOnName: string | null;
  addOnPrice: Decimal | null;
  addonsImageUrl: string | null;
  containsEgg: boolean | null;
  createdAt: Date | null;
  id: string;
  isVegetarian: boolean | null;
  optionsAddonsGroup?: OptionsAddonsGroup;
  orderItemsAddons?: Array<OrderItemsAddon>;
  updatedAt: Date | null;
};
