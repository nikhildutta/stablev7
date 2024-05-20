import { Decimal } from "decimal.js";
import { ComboItemTable } from "../comboItemTable/ComboItemTable";
import { OptionsAddonsGroup } from "../optionsAddonsGroup/OptionsAddonsGroup";
import { OptionsVarientsGroup } from "../optionsVarientsGroup/OptionsVarientsGroup";
import { OrderItem } from "../orderItem/OrderItem";

export type OptionsVarientsItem = {
  additionalPrice: Decimal | null;
  comboItemTable?: Array<ComboItemTable>;
  createdAt: Date | null;
  id: string;
  isDefault: boolean | null;
  optionsAddonsGroup?: Array<OptionsAddonsGroup>;
  optionsVarientsGroup?: OptionsVarientsGroup;
  orderItems?: Array<OrderItem>;
  updatedAt: Date | null;
  variantDescription: string | null;
  variantImageUrl: string | null;
  variantName: string | null;
};
