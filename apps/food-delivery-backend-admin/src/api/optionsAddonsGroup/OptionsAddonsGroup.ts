import { OptionsAddOnsItem } from "../optionsAddOnsItem/OptionsAddOnsItem";
import { OptionsVarientsItem } from "../optionsVarientsItem/OptionsVarientsItem";

export type OptionsAddonsGroup = {
  addOnGroupName: string | null;
  createdAt: Date | null;
  id: string;
  lowerLimit: number | null;
  optionsAddOnsGroupDescription: string | null;
  optionsAddOnsItem?: Array<OptionsAddOnsItem>;
  optionsVarientsItem?: OptionsVarientsItem;
  updatedAt: Date | null;
  upperLimit: number | null;
};
