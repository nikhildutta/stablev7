import { CouponListRelationFilter } from "../coupon/CouponListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DiscountMenuItemListRelationFilter } from "../discountMenuItem/DiscountMenuItemListRelationFilter";
import { DiscountTypeWhereUniqueInput } from "../discountType/DiscountTypeWhereUniqueInput";
import { DiscountWindowMapListRelationFilter } from "../discountWindowMap/DiscountWindowMapListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type DiscountWhereInput = {
  coupons?: CouponListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  discountMenuItem?: DiscountMenuItemListRelationFilter;
  discountType?: DiscountTypeWhereUniqueInput;
  discountWindowMap?: DiscountWindowMapListRelationFilter;
  expirationDate?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  maxDiscount?: IntNullableFilter;
  minimumOrderValue?: IntNullableFilter;
  typeOfDiscount?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  value?: DecimalNullableFilter;
};
