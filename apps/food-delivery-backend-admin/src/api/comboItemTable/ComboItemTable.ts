import { ComboGroup } from "../comboGroup/ComboGroup";
import { OptionsVarientsItem } from "../optionsVarientsItem/OptionsVarientsItem";

export type ComboItemTable = {
  comboGroups?: ComboGroup;
  createdAt: Date | null;
  id: string;
  isAddonAllowed: boolean | null;
  optionsVarientsItem?: OptionsVarientsItem;
  updatedAt: Date | null;
};
