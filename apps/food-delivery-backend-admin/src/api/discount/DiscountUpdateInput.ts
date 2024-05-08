import { CouponUpdateManyWithoutDiscountsInput } from "./CouponUpdateManyWithoutDiscountsInput";
import { DiscountMenuItemUpdateManyWithoutDiscountsInput } from "./DiscountMenuItemUpdateManyWithoutDiscountsInput";
import { DiscountTypeWhereUniqueInput } from "../discountType/DiscountTypeWhereUniqueInput";
import { DiscountWindowMapUpdateManyWithoutDiscountsInput } from "./DiscountWindowMapUpdateManyWithoutDiscountsInput";
import { Decimal } from "decimal.js";

export type DiscountUpdateInput = {
  coupons?: CouponUpdateManyWithoutDiscountsInput;
  discountMenuItem?: DiscountMenuItemUpdateManyWithoutDiscountsInput;
  discountType?: DiscountTypeWhereUniqueInput;
  discountWindowMap?: DiscountWindowMapUpdateManyWithoutDiscountsInput;
  expirationDate?: Date;
  isActive?: boolean | null;
  maxDiscount?: number | null;
  minimumOrderValue?: number | null;
  typeOfDiscount?: string | null;
  updatedAt?: Date | null;
  value?: Decimal | null;
};
