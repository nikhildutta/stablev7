import { Decimal } from "decimal.js";
import { OptionsAddOnsItem } from "../optionsAddOnsItem/OptionsAddOnsItem";
import { OptionsVarientsItem } from "../optionsVarientsItem/OptionsVarientsItem";

export type OptionsAddonsGroup = {
  addOnName: string | null;
  addOnPrice: Decimal | null;
  addonsImageUrl: string | null;
  containsEgg: boolean | null;
  createdAt: Date | null;
  id: string;
  isVegetarian: boolean | null;
  lowerLimit: number | null;
  optionsAddOnsItem?: Array<OptionsAddOnsItem>;
  optionsVarientsItem?: OptionsVarientsItem;
  updatedAt: Date | null;
  upperLimit: number | null;
};
