import { Decimal } from "decimal.js";
import { ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput } from "./ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput";
import { OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput } from "./OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput";
import { OptionsVarientsGroupWhereUniqueInput } from "../optionsVarientsGroup/OptionsVarientsGroupWhereUniqueInput";
import { OrderItemUpdateManyWithoutOptionsVarientsItemsInput } from "./OrderItemUpdateManyWithoutOptionsVarientsItemsInput";

export type OptionsVarientsItemUpdateInput = {
  additionalPrice?: Decimal | null;
  comboItemTable?: ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput;
  isDefault?: boolean | null;
  optionsAddonsGroup?: OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput;
  optionsVarientsGroup?: OptionsVarientsGroupWhereUniqueInput;
  orderItems?: OrderItemUpdateManyWithoutOptionsVarientsItemsInput;
  updatedAt?: Date | null;
  variantDescription?: string | null;
  variantImageUrl?: string | null;
  variantName?: string | null;
};
