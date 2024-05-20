import { Coupon } from "../coupon/Coupon";
import { DiscountMenuItem } from "../discountMenuItem/DiscountMenuItem";
import { DiscountType } from "../discountType/DiscountType";
import { DiscountWindowMap } from "../discountWindowMap/DiscountWindowMap";
import { Decimal } from "decimal.js";

export type Discount = {
  coupons?: Array<Coupon>;
  createdAt: Date | null;
  discountMenuItem?: Array<DiscountMenuItem>;
  discountType?: DiscountType;
  discountWindowMap?: Array<DiscountWindowMap>;
  expirationDate: Date;
  id: string;
  isActive: boolean | null;
  maxDiscount: number | null;
  minimumOrderValue: number | null;
  typeOfDiscount: string | null;
  updatedAt: Date | null;
  value: Decimal | null;
};
