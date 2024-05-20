import { Decimal } from "decimal.js";
import { ComboItemTableCreateNestedManyWithoutOptionsVarientsItemsInput } from "./ComboItemTableCreateNestedManyWithoutOptionsVarientsItemsInput";
import { OptionsAddonsGroupCreateNestedManyWithoutOptionsVarientsItemsInput } from "./OptionsAddonsGroupCreateNestedManyWithoutOptionsVarientsItemsInput";
import { OptionsVarientsGroupWhereUniqueInput } from "../optionsVarientsGroup/OptionsVarientsGroupWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOptionsVarientsItemsInput } from "./OrderItemCreateNestedManyWithoutOptionsVarientsItemsInput";

export type OptionsVarientsItemCreateInput = {
  additionalPrice?: Decimal | null;
  comboItemTable?: ComboItemTableCreateNestedManyWithoutOptionsVarientsItemsInput;
  isDefault?: boolean | null;
  optionsAddonsGroup?: OptionsAddonsGroupCreateNestedManyWithoutOptionsVarientsItemsInput;
  optionsVarientsGroup: OptionsVarientsGroupWhereUniqueInput;
  orderItems?: OrderItemCreateNestedManyWithoutOptionsVarientsItemsInput;
  updatedAt?: Date | null;
  variantDescription?: string | null;
  variantImageUrl?: string | null;
  variantName?: string | null;
};
