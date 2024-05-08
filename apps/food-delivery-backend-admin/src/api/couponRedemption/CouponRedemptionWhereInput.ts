import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type CouponRedemptionWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  coupons?: CouponWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isRedeemed?: BooleanNullableFilter;
  redemptionDate?: DateTimeFilter;
  updatedAt?: DateTimeNullableFilter;
};
