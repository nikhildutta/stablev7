import { StringFilter } from "../../util/StringFilter";
import { CouponRedemptionListRelationFilter } from "../couponRedemption/CouponRedemptionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderHistoryListRelationFilter } from "../orderHistory/OrderHistoryListRelationFilter";

export type CouponWhereInput = {
  code?: StringFilter;
  couponRedemptions?: CouponRedemptionListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  discount?: DiscountWhereUniqueInput;
  expirationDate?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  orderHistory?: OrderHistoryListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
