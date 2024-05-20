import { DiscountCreateNestedManyWithoutDiscountTypesInput } from "./DiscountCreateNestedManyWithoutDiscountTypesInput";

export type DiscountTypeCreateInput = {
  discount?: DiscountCreateNestedManyWithoutDiscountTypesInput;
  discountType?: string | null;
};
