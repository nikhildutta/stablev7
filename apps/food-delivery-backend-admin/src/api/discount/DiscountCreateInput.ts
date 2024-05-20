import { CouponCreateNestedManyWithoutDiscountsInput } from "./CouponCreateNestedManyWithoutDiscountsInput";
import { DiscountMenuItemCreateNestedManyWithoutDiscountsInput } from "./DiscountMenuItemCreateNestedManyWithoutDiscountsInput";
import { DiscountTypeWhereUniqueInput } from "../discountType/DiscountTypeWhereUniqueInput";
import { DiscountWindowMapCreateNestedManyWithoutDiscountsInput } from "./DiscountWindowMapCreateNestedManyWithoutDiscountsInput";
import { Decimal } from "decimal.js";

export type DiscountCreateInput = {
  coupons?: CouponCreateNestedManyWithoutDiscountsInput;
  discountMenuItem?: DiscountMenuItemCreateNestedManyWithoutDiscountsInput;
  discountType: DiscountTypeWhereUniqueInput;
  discountWindowMap?: DiscountWindowMapCreateNestedManyWithoutDiscountsInput;
  expirationDate: Date;
  isActive?: boolean | null;
  maxDiscount?: number | null;
  minimumOrderValue?: number | null;
  typeOfDiscount?: string | null;
  updatedAt?: Date | null;
  value?: Decimal | null;
};
